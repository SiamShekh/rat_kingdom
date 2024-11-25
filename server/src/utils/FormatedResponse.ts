const FormatedResponse = (status_code: number, msg: string, data: any) => {
    return {
        status_code, msg, data
    }
};

export default FormatedResponse;