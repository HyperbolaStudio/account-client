import axios from 'axios';
export async function accessor(req, path, validate = () => true) {
    return new Promise((resolve, reject) => {
        if (!validate(req)) {
            reject(new Error('Invalid value'));
            return;
        }
        axios.post(path, req).then((res) => {
            const response = res.data;
            if (response.status !== 'Success') {
                reject(new Error(response.status));
            }
            else {
                resolve(response);
            }
        }).catch((err) => {
            reject(err);
        });
    });
}
