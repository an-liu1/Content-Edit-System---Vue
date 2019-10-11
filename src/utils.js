export const throwErr = (code, response) => {
    let message = 'The server could not understand the request due to invalid syntax.'
    switch (code) {
      case 400:
        message = 'The server could not understand the request due to invalid syntax.'
        break
      case 401:
        message = 'Unauthorized'
        break
      case 403:
        message = 'Forbidden'
        break
      case 404:
        message = `Not Found: ${response.config.url}`
        break
      case 408:
        message = 'Request Timeout'
        break
      case 500:
        message = 'Internal Server Error'
        break
      case 501:
        message = 'Not Implemented'
        break
      case 502:
        message = 'Bad Gateway'
        break
      case 503:
        message = 'Service Unavailable'
        break
      case 504:
        message = 'Gateway Timeout'
        break
      case 505:
        message = 'HTTP Version Not Supported'
        break
      default:
    }
    return message
  }