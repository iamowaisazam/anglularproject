import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-invoice-list',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule
  ],
  templateUrl: './invoice-list.component.html',
  styleUrl: './invoice-list.component.css'
})
export class InvoiceListComponent {

  invoices: any = [];


  ngOnInit(): void {

    

    this.getInvoices();
  }


  
getInvoices() : void {


  let storedInvoices : any = localStorage.getItem("invoices");
  if (!storedInvoices) {

  }else{

   
    if (storedInvoices) {

        storedInvoices = JSON.parse(storedInvoices);
        if (storedInvoices) {

          let nn: any = [];
          for (let i = 0; i < storedInvoices.length; i++) {

            nn.push({
              id: storedInvoices[i].id,
              ref_number:storedInvoices[i]?.ref_number,
              invoice_date:storedInvoices[i]?.invoice_date,
              status:storedInvoices[i]?.status,
              customer_address:storedInvoices[i]?.customer_address,
              customer_email:storedInvoices[i]?.customer_email,
              customer_name: storedInvoices[i]?.customer_name,
              customer_phone : storedInvoices[i]?.customer_phone,
              invoice_items: storedInvoices[i]?.invoice_items,
              subtotal:storedInvoices[i]?.subtotal,
              tax:storedInvoices[i]?.tax,
              taxAmount:storedInvoices[i]?.taxAmount,
              grandtotal:storedInvoices[i]?.grandtotal,
            });
          }

          this.invoices = nn;
        }


    }

  }

}


delete(id:any) : any{
   
  let storedInvoices : any = localStorage.getItem("invoices");
  if(!storedInvoices){
    return false;
  }
  storedInvoices = JSON.parse(storedInvoices);
  if(!storedInvoices){
    return false;
  }
  
  
  storedInvoices = storedInvoices.filter((item:any) => item.id !== id);
  localStorage.setItem("invoices",JSON.stringify(storedInvoices));

  // console.log(storedInvoices);

  alert("Deleted");
  this.getInvoices();
  
  // let item:any = storedInvoices.find((item:any) => item.id === id);

}



}
