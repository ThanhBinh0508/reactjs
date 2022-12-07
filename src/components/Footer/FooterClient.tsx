import React from 'react'

type Props = {}

const FooterClient = (props: Props) => {
  return (
    <div>
        <div className="container ">
            <div className="row">

              <div className="col">
                <div>
                  <h6 className="text-lg">Đối tác dịch vụ bảo hành</h6>
                  <p>Mua hàng và thanh toán Online</p>
                  <p>Mua hàng trả góp Online </p>
                  <p>Tra thông tin đơn hàng</p>
                  <p>Tra điểm Smember</p>
                  <p>Tra thông tin bảo hành </p>
                  <p>Tra cứu hoá đơn VAT điện tử</p>
                  <p>Trung tâm bảo hành chính hãng</p>
                  <p>Quy định về việc sao lưu dữ liệu </p>
                  <p className="text-red-600">Dịch vụ bảo hành điện thoại</p>
                </div>
              </div>
              <div className='col'>
                <div>
                  <h6 className="text-lg ">Trung tâm bảo hành uỷ quyền Apple</h6>
                  <p>Quy chế hoạt động</p>
                  <p>Chính sách Bảo hành </p>
                  <p>Liên hệ hợp tác kinh doanh</p>
                  <p>Khách hàng doanh nghiệp (B2B)</p>
                  <p className="text-red-600">Ưu đãi thanh toán </p>
                  <p>Tuyển dụng</p>
                </div>
              </div>
              <div className="col">
                <div>
                  <div>
                    <h6 className="text-lg">Tìm cửa hàng</h6>
                    <p>Tìm cửa hàng gần nhất</p>
                    <p>Mua hàng từ xa</p>
                    <p className="text-red-600">Gặp trực tiếp cửa hàng gần nhất (Zalo hoặc gọi điện)</p>
                  </div>
                  <div>
                    <h6 className="text-lg mt-2">Phương thức thanh toán</h6>
                    <div className="flex mt-2">
                      <img src="../public/images/thanhtoan1.png" className='mx-2' alt="" />
                      <img src="../public/images/thanhtoan2.png" className='mx-2' alt="" />
                      <img src="../public/images/thanhtoan3.png" className='mx-2' alt="" />
                      <img src="../public/images/thanhtoan4.png" className='mx-2' alt="" />
                    </div>
                  </div>
                </div>
                <div>
                  <p>Gọi mua hàng: 1800.2044 (8h00 - 22h00)</p>
                  <p>Gọi khiếu nại: 1800.2044 (8h00 - 22h00)</p>
                  <p>Gọi bảo hành: 1800.2044 (8h00 - 22h00)</p>
                  <img className="mt-2" src="../public/images/dienthoaivui.png" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="container mt-4">
            <div className="row">
              <div className="col">
                <div>
                  <p>Điện thoại iPhone 13- Điện thoại iPhone 12- Điện thoại iPhone 11</p>
                  <p>Điện thoại iPhone 13 Pro Max- Điện thoại iPhone 11 Pro Max</p>
                  <p>iPhone cũ giá rẻ- iPhone 13 cũ- iPhone 12 cũ- iPhone 11 cũ</p>
                </div>
              </div>
              <div className="col">
                <div>
                  <p>Điện thoại iPhone- Điện thoại Samsung- Điện thoại Samsung A</p>
                  <p>Điện thoại OPPO- Điện thoại Xiaomi</p>
                  <p>Samsung Fold 3- Samsung S22- Samsung A73- Samsung A53</p>
                </div>
              </div>
              <div className="col">
                <div>
                  <p>Laptop- Laptop HP- Laptop Dell- Laptop Acer</p>
                  <p>Microsoft Surface- Laptop Lenovo- Laptop Asus</p>
                  <p>Máy tính để bàn- Màn hình máy tính- Camera- Camera hành trình</p>
                </div>
              </div>
            </div>
            <p className="text-center text-gray-400 mx-20 mb-2">Công ty TNHH Thương mại và dịch vụ kỹ thuật DIỆU PHÚC - GPĐKKD: 0316172372 do sở KH &amp; ĐT TP. HCM cấp ngày 02/03/2020. Địa chỉ: 350-352 Võ Văn Kiệt, Phường Cô Giang, Quận 1, Thành phố Hồ Chí Minh, Việt Nam. Điện thoại: 028.7108.9666.</p>
          </div>
    </div>
  )
}

export default FooterClient