import { getToken } from "../../helpers/auth/token";

const getHeaders = async (isToken=false) => {
    
    const token = await getToken();

    const headers = {
        "Content-Type": "application/json",
        Authorization: isToken ? `Bearer: ${token}` : null,
    };

    return headers;

};

export default getHeaders;
