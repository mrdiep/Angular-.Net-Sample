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
  title = 'ĐÂY LÀ DANH SÁCH SẢN PHẨM - XYZ';
  danhSachSanPham = new Observable<object[]>();
  danhSachSanPham2 = []
  //Inject
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.danhSachSanPham = this.http.get<object[]>('https://localhost:44357/products');
  }
}
