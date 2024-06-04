
export const successObject = (message:string,response:any) => {
    return {
        success: true,
        message: message,
        data: response
    }
}

export const errorObject = (error:any) => {
    return {
        success: false,
        message: error,
    }
}