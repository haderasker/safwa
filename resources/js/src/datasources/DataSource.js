export const Server = (uri) => {

  return async (page = 1, perPage = 10, sort = [], group = {}, filters = {}) => {
    window.allowDefaultLoader = false

    const {data} = await window.safwaAxios.get(uri, {
      params: {
        perPage,
        page,
        sort, // [ { colId: 'name', cort: 'asc' } ]
        group, // [1, 3, 6, 8]
        filters // { search: '', type: '', event: '' }
      }
    })

    window.allowDefaultLoader = true
    return data
  }
}

export const DataSource = (server) => {
  return (filters) => {
    return {
      // called by the grid when more rows are required
      async getRows (params) {
        // calculate how many rows we need in the page
        const perPage = params.request.endRow - params.request.startRow

        // we manually calculate current and NOT using params.api.getCurrentPage()
        // because of child rows
        // when we try to paginate child rows the getCurrentPage will return the root page not the child current page
        const page = Math.ceil(params.request.startRow / perPage) + 1

        // get data from server
        // const response = await server(page, perPage, params.request.sortModel, params.request.groupKeys, filters)
        const response = {
            success: true,
            payload: {
                total: 0,
                data: []
            }
        }
        if (response.success) {
          if (response.payload.total) {
            // supply rows for requested block to grid
            // params.api.hideNoRowsOverlay()
            params.api.hideOverlay()
            params.successCallback(Object.values(response.payload.data), response.payload.total)

          } else {
            params.api.showNoRowsOverlay()
            params.successCallback([], 0)
          }
        } else {
          // inform grid request failed
          params.failCallback()
        }
      },

      destroy () {
        // use this when your server needs any sort of cleaning
      }
    }
  }
}
