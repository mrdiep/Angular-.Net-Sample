import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.scss']
})

// life cycle
export class Demo1Component implements OnInit {

  //B1: Khai báo dữ liệu

  // khai báo 1 biến tên là 'Bien_kieu_chu' có kiểu dữ liệu là string, set giá trị mặc định là 'ĐÂy là string'
  Bien_kieu_chu: string = 'Đây là string';

    // khai báo 1 biến tên là 'Bien_kieu_so' có kiểu dữ liệu là number, set giá trị mặc định là -123
  Bien_kieu_so: number = -123;

  // khai báo 1 biến chứa loại data type là structure object
  Bien_kieu_data_object: any =
  {
    ThuocTinh1: 1,
    ThuocTinh2: 'Đây là thuộc tính kiểu chữ',
    DoiTuongCon:
    {
      ThuocTinh_Con1: 1,
      ThuocTinh_Con2: 'Đối tượng con số 2'
    }
  };

  title1: string = 'ĐÂY LÀ DANH SÁCH SẢN PHẨM';
  title2: string = this.title1;
  products$: Observable<any[]> = new Observable<any[]>();
  products: any[] = [];

  // B2: Khai báo các thư viện cần sài trong nội bộ component này
  // Ví dụ: muốn sài HttpClient để kéo data từ AP về, dùng câu lênh: this.httpX
  constructor(private httpX: HttpClient) { }

  // B3: KHai báo logic, gọi data
  ngOnInit(): void {
    this.products$ = this.httpX.get<any[]>('https://localhost:44357/products');

    this.httpX.get<any[]>('https://localhost:44357/products').subscribe(x => {
      this.title2 = 'CÓ ' +  x.length + ' SẢN PHẨM TRONG DANH SÁCH';
      this.products = x;

      // In ra màn hình console log
      console.log(this.products);
    });
  }
}
