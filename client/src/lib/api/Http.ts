import axios from "axios";
import { API_URI } from "@/config";
import { requestInterceptor, requestErrorInterceptor } from "@/lib/api/interceptors/request.interceptor";
import { responseErrorInterceptor, responseInterceptor } from "@/lib/api/interceptors/response.interceptor";

axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.common["Access-Control-Allow-Methods"] = "DELETE, POST, GET";
axios.defaults.headers.common["Access-Control-Allow-Headers"] = "Content-Type, Authorization, X-Requested-With";

axios.defaults.baseURL = API_URI;

axios.interceptors.request.use(requestInterceptor, requestErrorInterceptor);

axios.interceptors.response.use(responseInterceptor, responseErrorInterceptor);

const HTTP = axios;

export default HTTP;
