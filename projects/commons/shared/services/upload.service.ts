import { environment } from './../../../client/src/environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class UploadService {
    constructor(private http: HttpClient) {}

    upload(data: FormData) {
        return this.http
            .post<any>(`${environment.URL_API}/file/upload`, data)
    }

    buildFormData(file, data) {
        const formData = new FormData();
        formData.append('file', file);
        Object.keys(data).forEach(key => {
            formData.append(key, data[key]);
        });
        return formData;
    }
}
