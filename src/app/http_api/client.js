// Instruments
import { ROOT_URL } from './config';

export const Api =  new class Api {
    fetchServices() {
        return fetch(`${ROOT_URL}`);
    }
    fetchFilter(id) {
        return fetch(`${ROOT_URL}/categories/${id}`);
    }
    fetchServicesByFilter(id) {
        return fetch(`${ROOT_URL}/works/${id}`);
    }
}();
