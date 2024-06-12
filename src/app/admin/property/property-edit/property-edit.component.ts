import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-edit',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './property-edit.component.html',
  styleUrl: './property-edit.component.css'
})
export class PropertyEditComponent {
  invoice_items : any = [];

  invoice : any = {
    id:"",
    ref_number:"",
    invoice_date : "",
    status:"",
    customer_name:"",
    customer_phone:"",
    customer_email:"",
    customer_address:"",
    subtotal:0,
    tax:0,
    taxAmount:0,
    grandtotal:0,
    invoice_items: [],
  };

  constructor(private route: ActivatedRoute) {
    
    this.loadInvoice();
  
  }

  loadInvoice(): void {

    const invoiceId = this.route.snapshot.paramMap.get('id'); // Get the ID from the route
    const storedInvoices = localStorage.getItem("invoices");
    if (storedInvoices) {
      const invoices = JSON.parse(storedInvoices);
      const invoiceToEdit = invoices.find((inv: any) => inv.id === invoiceId);
      if (invoiceToEdit) {
        this.invoice = invoiceToEdit;
        this.invoice_items = invoiceToEdit.invoice_items || [];
      }
    }

  }

  onUpdate(field:any,id:any,e:any) : void {

    let value:any = e.target.value; 
    let item:any = this.invoice_items.find((item:any) => item.id === id);
    if (item) {

      item[field] = value;
      let qty = Number(item.quantity) || 0;
      let pp = Number(item.price) || 0;
      item.total = (qty * pp);
      
    }

    // this.calculate();
  }
  
  addItem() : void  {

    this.invoice_items.push({
      id: this.generateRandomId(),
      product:"",
      quantity:"",
      price:"",
      total:"",
    });

    this.calculate();
  }


  removeItem(id:string) : void  { 

     this.invoice_items = this.invoice_items.filter((item:any) => item.id !== id);
  }

  calculate() : void {

    this.invoice.subtotal = 0;
    this.invoice_items.forEach((element:any) => {
      this.invoice.subtotal += Number(element.total);
    });

    this.invoice.taxAmount = (this.invoice.subtotal * Number(this.invoice.tax)) / 100;
    this.invoice.grandtotal = this.invoice.subtotal + this.invoice.taxAmount;

  }



  generateRandomId() : string {
    return '_' + Math.random().toString(36).substr(2, 9) + Date.now().toString(36);
  }

  generateInvoice() : any {

    
    this.invoice.invoice_items = this.invoice_items;
    const storedInvoices = localStorage.getItem("invoices");
    let invoices = [];
    if (storedInvoices) {
      invoices = JSON.parse(storedInvoices);
    }

    if(!invoices){
      return false;
    }
    
    let update_invoice = [];
    for (let index = 0; index < invoices.length; index++) {
   
      const iid = invoices[index].id;
      if(iid == this.invoice.id){
        debugger
        update_invoice.push(this.invoice);
      }else{
        update_invoice.push(invoices[index]);
      }

    }

  


    // invoices.push(this.invoice);
    localStorage.setItem("invoices", JSON.stringify(update_invoice));
    alert('Invoice Updated');
    this.loadInvoice();


  }
}
