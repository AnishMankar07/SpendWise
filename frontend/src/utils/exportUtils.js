import { data } from 'react-router-dom';
import * as XLSX from 'xlsx';
export const exportToExcel = (data, fileName = "transactions")=>{
    if(!data || data.length === 0){
        alert("no data to export!");
        return;
    }
    try {
        const worksheet = XLSX.utils.json_to_sheet(data);

        //to create a workbook
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook,worksheet,"Transactions");

        //ganarate a excel file and trigger download
        XLSX.writeFile(workbook, `${fileName}.xlsx`,{
            bookType: 'xlsx',
            type : 'array'
        })

    } catch (err) {
        console.error("Export Error: ",err);
        alert("Error exporting data, Please try again.")
    }
}