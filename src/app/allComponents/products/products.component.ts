import { Component, OnInit } from '@angular/core';
import { FilterPipe } from 'src/app/Pipes/filter.pipe';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  result:string;
  constructor() { }
  
  // name:string='';  
   
  bestItem=[
    {'id':1,'img':'../../../assets/product_List/pro1.jpg','title':'Decor','price':'1,525'},
    {'id':2,'img':'../../../assets/product_List/pro2.jpg','title':'Decor','price':'1,399'},
    {'id':3,'img':'../../../assets/product_List/pro3.jpg','title':'Decor','price':'1,525'},
    {'id':4,'img':'../../../assets/product_List/pro4.jpg','title':'Decor','price':'1,750'},
    {'id':5,'img':'../../../assets/product_List/pro5.jpg','title':'Decor','price':'750'},
    {'id':6,'img':'../../../assets/product_List/pro6.jpg','title':'lanterns','price':'1,299'},
    {'id':7,'img':'../../../assets/product_List/pro7.jpg','title':'lanterns','price':'1,525'},
    {'id':8,'img':'../../../assets/product_List/pro8.jpg','title':'lanterns','price':'1,750'},
    {'id':9,'img':'../../../assets/product_List/pro9.jpg','title':'lanterns','price':'1,299'},
    {'id':10,'img':'../../../assets/product_List/pro10.jpg','title':'lanterns','price':'750'},
    {'id':11,'img':'../../../assets/product_List/pro11.jpg','title':'wall decor','price':'1,525'},
    {'id':12,'img':'../../../assets/product_List/pro12.jpg','title':'wall decor','price':'1,750'},
    {'id':13,'img':'../../../assets/product_List/pro13.jpg','title':'wall decor','price':'1,299'},
    {'id':14,'img':'../../../assets/product_List/pro14.jpg','title':'wall decor','price':'1,399'},
    {'id':15,'img':'../../../assets/product_List/pro15.jpg','title':'wall decor','price':'1,525'},
    {'id':16,'img':'../../../assets/product_List/pro16.jpg','title':'hardware','price':'750'},
    {'id':17,'img':'../../../assets/product_List/pro17.jpg','title':'hardware','price':'1,299'},
    {'id':18,'img':'../../../assets/product_List/pro18.jpg','title':'hardware','price':'1,750'},
    {'id':19,'img':'../../../assets/product_List/pro19.jpg','title':'spiritulity','price':'750'},
    {'id':20,'img':'../../../assets/product_List/pro20.jpg','title':'spiritulity','price':'1,750'},
    {'id':21,'img':'../../../assets/product_List/pro21.jpg','title':'bells & chimes','price':'1,599'},
    {'id':22,'img':'../../../assets/product_List/pro22.jpg','title':'bells & chimes','price':'1,299'},
    {'id':23,'img':'../../../assets/product_List/pro23.jpg','title':'bells & chimes','price':'1,299'},
    {'id':24,'img':'../../../assets/product_List/pro24.jpg','title':'bells & chimes','price':'1,599'},
    {'id':25,'img':'../../../assets/product_List/pro25.jpg','title':'bells & chimes','price':'750'},
    {'id':26,'img':'../../../assets/product_List/pro26.jpg','title':'urli decor','price':'500'},
    {'id':27,'img':'../../../assets/product_List/pro27.jpg','title':'urli decor','price':'1,525'},
    {'id':28,'img':'../../../assets/product_List/pro28.jpg','title':'urli decor','price':'1,750'},

  ]

  // |

  resultarray:any;
  
  filterdata(name){
    this.result =name;
    this.resultarray = this.bestItem.filter((item)=>{
      return item.title == name;
    })
    console.log(this.resultarray);
    
  }
  ngOnInit(): void {
  }
}
