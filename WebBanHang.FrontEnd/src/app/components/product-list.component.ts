import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})

// life cycle
export class ProductListComponent implements OnInit {
  title: string = 'DANH SÁCH SẢN PHẨM';
  products: any[] = [];

  // B2: Khai báo các thư viện cần sài trong nội bộ component này
  // Ví dụ: muốn sài HttpClient để kéo data từ AP về, dùng câu lênh: this.http
  constructor(private http: HttpClient) { }

  // B3: KHai báo logic, gọi data
  ngOnInit(): void {
    this.http.get<any[]>('https://localhost:44357/products').subscribe(x => {
      this.title = 'CÓ ' +  x.length + ' SẢN PHẨM TRONG DANH SÁCH';
      this.products = x;

      // In ra màn hình console log
      console.log(this.products);
    });
  }
}
