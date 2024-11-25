const FormatedError = (status_code: number, msg: string) => {
    return {
        status_code, msg
    }
};

export default FormatedError;