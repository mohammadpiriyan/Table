// import { ReactComponent as IconEmpty } from '../../../images/new/emptywallet.svg';
import React from 'react';

const Tables = ({ data, headers, styleTable }) => {
  const variants = {
    refferal: "w-full",
  };
  const variantParent = {
    refferal: "w-full border rounded-md p-2",
  };
  const variantTh = {
    refferal: " border-b text-center py-4 md:p-5 text-sm",
  };
  const variantTd = {
    refferal: " border-b text-center p-5",
  };


  if (data?.length > 0) {
    return (
      <div className={variantParent[styleTable?.variantParent]}>
        <table className={variants[styleTable?.variants]}>
          <thead>
            <tr>
              {headers?.map((header, index) => (
                <th key={index} className={variantTh[styleTable?.variantTh]}>{header?.setter}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data?.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {headers?.map((header, index) => (
                  <td key={index} className={variantTd[styleTable?.variantTd]}>
                    {row[header?.accessor]?.type === 'button' ? <button>{row[header?.accessor]?.text}</button> :
                      header?.accessor === 'index' ? rowIndex + 1 :
                        row[header?.accessor]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  } else {
    return (
      <>
        <div className="flex flex-col justify-center">
          <table className={variants[styleTable?.variants]}>
            <thead>
              <tr>
                {headers?.map((header, index) => (
                  <th key={index} className={variantTh[styleTable?.variantTh]}>{header?.setter}</th>
                ))}
              </tr>
            </thead>
          </table>
          <div className="float-right w-full flex justify-center mt-5">
            {/* <IconEmpty /> */}
          </div>
          <div className="w-full">
            <p className="text-[#707070] text-[14px] font-medium w-full text-center mt-6 my-4">
              اطلاعاتی برای نمایش وجود ندارد
            </p>
          </div>
        </div>
      </>
    );
  }

};

export default Tables;

// Usage:

// const dataTable = [
//   { device: 'Chrome 99.0.4844.84 (Windows)', location: 'IR', IP: '51.158.169.234', date: '1400/12/28 | 22:30' , function:{func:'',type:'button',text:'حذف'} },
//   { device: 'Chrome 99.0.4844.84 (Windows)', location: 'IR', IP: '51.158.169.234', date: '1400/12/28 | 22:30' , function:{func:'',type:'button',text:'حذف'} },
//   { device: 'Chrome 99.0.4844.84 (Windows)', location: 'IR', IP: '51.158.169.234', date: '1400/12/28 | 22:30' , function:{func:'',type:'button',text:'حذف'} },
// ];

