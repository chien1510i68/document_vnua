"use server";
import React from "react";
import DepartmentItem from "./DepartmentItem";
import CourseItem from "../courses/CourseItem";

// async function getData() {
//   const response = await fetch(
//     "https://raw.githubusercontent.com/chien1510i68/document_data/main/data.json"
//   );
//   return response.json();
// }

export default async function Department() {
  // const data = await getData();
  const data = [
    {
      departmentName: "Công nghệ thông tin ",
      key: "CNTT",
      subjects: [
        {
          name: "Xác xuất thống kê",
          key: "xstk",
          documents: [
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 1",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2020/11/ky2-19-20-De-thi-TCC-Merging-Result.pdf",
            },
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 2",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2020/11/ky2-19-20-De-thi-TCC-Merging-Result.pdf",
            },
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 1",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2019/10/TCC-HK3-1819.pdf",
            },
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 1",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2016/07/Dechinhthuc-TCC-hk2-15-16.pdf",
            },
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 1",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2019/10/XSTK-HK3-1819.pdf",
            },
          ],
        },
        {
          name: "Toán giải tích",
          key: "tgt",
          documents: [
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 1",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2020/11/ky2-19-20-De-thi-TCC-Merging-Result.pdf",
            },
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 2",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2020/11/ky2-19-20-De-thi-TCC-Merging-Result.pdf",
            },
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 1",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2019/10/TCC-HK3-1819.pdf",
            },
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 1",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2016/07/Dechinhthuc-TCC-hk2-15-16.pdf",
            },
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 1",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2019/10/XSTK-HK3-1819.pdf",
            },
          ],
        },
        {
          name: "Toán giải tích",
          key: "tgt",
          documents: [
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 1",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2020/11/ky2-19-20-De-thi-TCC-Merging-Result.pdf",
            },
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 2",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2020/11/ky2-19-20-De-thi-TCC-Merging-Result.pdf",
            },
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 1",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2019/10/TCC-HK3-1819.pdf",
            },
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 1",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2016/07/Dechinhthuc-TCC-hk2-15-16.pdf",
            },
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 1",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2019/10/XSTK-HK3-1819.pdf",
            },
          ],
        },
        {
          name: "Toán giải tích",
          key: "tgt",
          documents: [
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 1",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2020/11/ky2-19-20-De-thi-TCC-Merging-Result.pdf",
            },
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 2",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2020/11/ky2-19-20-De-thi-TCC-Merging-Result.pdf",
            },
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 1",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2019/10/TCC-HK3-1819.pdf",
            },
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 1",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2016/07/Dechinhthuc-TCC-hk2-15-16.pdf",
            },
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 1",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2019/10/XSTK-HK3-1819.pdf",
            },
          ],
        },
        {
          name: "Toán giải tích",
          key: "tgt",
          documents: [
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 1",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2020/11/ky2-19-20-De-thi-TCC-Merging-Result.pdf",
            },
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 2",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2020/11/ky2-19-20-De-thi-TCC-Merging-Result.pdf",
            },
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 1",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2019/10/TCC-HK3-1819.pdf",
            },
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 1",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2016/07/Dechinhthuc-TCC-hk2-15-16.pdf",
            },
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 1",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2019/10/XSTK-HK3-1819.pdf",
            },
          ],
        },
        {
          name: "Toán giải tích",
          key: "tgt",
          documents: [
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 1",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2020/11/ky2-19-20-De-thi-TCC-Merging-Result.pdf",
            },
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 2",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2020/11/ky2-19-20-De-thi-TCC-Merging-Result.pdf",
            },
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 1",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2019/10/TCC-HK3-1819.pdf",
            },
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 1",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2016/07/Dechinhthuc-TCC-hk2-15-16.pdf",
            },
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 1",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2019/10/XSTK-HK3-1819.pdf",
            },
          ],
        },
        {
          name: "Toán giải tích",
          key: "tgt",
          documents: [
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 1",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2020/11/ky2-19-20-De-thi-TCC-Merging-Result.pdf",
            },
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 2",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2020/11/ky2-19-20-De-thi-TCC-Merging-Result.pdf",
            },
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 1",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2019/10/TCC-HK3-1819.pdf",
            },
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 1",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2016/07/Dechinhthuc-TCC-hk2-15-16.pdf",
            },
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 1",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2019/10/XSTK-HK3-1819.pdf",
            },
          ],
        },
        {
          name: "Toán giải tích",
          key: "tgt",
          documents: [
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 1",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2020/11/ky2-19-20-De-thi-TCC-Merging-Result.pdf",
            },
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 2",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2020/11/ky2-19-20-De-thi-TCC-Merging-Result.pdf",
            },
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 1",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2019/10/TCC-HK3-1819.pdf",
            },
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 1",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2016/07/Dechinhthuc-TCC-hk2-15-16.pdf",
            },
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 1",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2019/10/XSTK-HK3-1819.pdf",
            },
          ],
        },
        {
          name: "Toán giải tích",
          key: "tgt",
          documents: [
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 1",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2020/11/ky2-19-20-De-thi-TCC-Merging-Result.pdf",
            },
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 2",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2020/11/ky2-19-20-De-thi-TCC-Merging-Result.pdf",
            },
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 1",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2019/10/TCC-HK3-1819.pdf",
            },
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 1",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2016/07/Dechinhthuc-TCC-hk2-15-16.pdf",
            },
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 1",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2019/10/XSTK-HK3-1819.pdf",
            },
          ],
        },
        {
          name: "Toán giải tích",
          key: "tgt",
          documents: [
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 1",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2020/11/ky2-19-20-De-thi-TCC-Merging-Result.pdf",
            },
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 2",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2020/11/ky2-19-20-De-thi-TCC-Merging-Result.pdf",
            },
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 1",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2019/10/TCC-HK3-1819.pdf",
            },
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 1",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2016/07/Dechinhthuc-TCC-hk2-15-16.pdf",
            },
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 1",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2019/10/XSTK-HK3-1819.pdf",
            },
          ],
        },
        {
          name: "Toán giải tích",
          key: "tgt",
          documents: [
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 1",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2020/11/ky2-19-20-De-thi-TCC-Merging-Result.pdf",
            },
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 2",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2020/11/ky2-19-20-De-thi-TCC-Merging-Result.pdf",
            },
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 1",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2019/10/TCC-HK3-1819.pdf",
            },
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 1",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2016/07/Dechinhthuc-TCC-hk2-15-16.pdf",
            },
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 1",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2019/10/XSTK-HK3-1819.pdf",
            },
          ],
        },
        {
          name: "Toán giải tích",
          key: "tgt",
          documents: [
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 1",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2020/11/ky2-19-20-De-thi-TCC-Merging-Result.pdf",
            },
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 2",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2020/11/ky2-19-20-De-thi-TCC-Merging-Result.pdf",
            },
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 1",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2019/10/TCC-HK3-1819.pdf",
            },
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 1",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2016/07/Dechinhthuc-TCC-hk2-15-16.pdf",
            },
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 1",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2019/10/XSTK-HK3-1819.pdf",
            },
          ],
        },
        {
          name: "Toán giải tích",
          key: "tgt",
          documents: [
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 1",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2020/11/ky2-19-20-De-thi-TCC-Merging-Result.pdf",
            },
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 2",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2020/11/ky2-19-20-De-thi-TCC-Merging-Result.pdf",
            },
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 1",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2019/10/TCC-HK3-1819.pdf",
            },
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 1",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2016/07/Dechinhthuc-TCC-hk2-15-16.pdf",
            },
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 1",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2019/10/XSTK-HK3-1819.pdf",
            },
          ],
        },
      ],
    },
    {
      departmentName: "Công nghệ thực phẩm",
      key: "CNTP",
      subjects: [
        {
          name: "Xác xuất thống kê",
          key: "xstk",
          documents: [
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 1",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2020/11/ky2-19-20-De-thi-TCC-Merging-Result.pdf",
            },
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 2",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2020/11/ky2-19-20-De-thi-TCC-Merging-Result.pdf",
            },
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 1",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2019/10/TCC-HK3-1819.pdf",
            },
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 1",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2016/07/Dechinhthuc-TCC-hk2-15-16.pdf",
            },
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 1",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2019/10/XSTK-HK3-1819.pdf",
            },
          ],
        },
        {
          name: "Toán giải tích",
          key: "tgt",
          documents: [
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 1",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2020/11/ky2-19-20-De-thi-TCC-Merging-Result.pdf",
            },
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 2",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2020/11/ky2-19-20-De-thi-TCC-Merging-Result.pdf",
            },
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 1",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2019/10/TCC-HK3-1819.pdf",
            },
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 1",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2016/07/Dechinhthuc-TCC-hk2-15-16.pdf",
            },
            {
              title: "Tài liệu năm học 2019 - 2020. Học kỳ 1",
              link: "https://fita.vnua.edu.vn/wp-content/uploads/2019/10/XSTK-HK3-1819.pdf",
            },
          ],
        },
      ],
    },
  ];
  console.log(data);

  return (
    <div>
      {data &&
        data?.map((item) => (
          <>
            <DepartmentItem data={item} />
          </>
        ))}
    </div>
  );
}
