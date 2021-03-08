export interface IProduct {
  status : {
    code : number
  },
 data : {
   contents : ProductItem[],
   paging : {
     page: number,
     pageSize : number,
     totalRecords:number
   }
 }
 
}


export interface ProductItem{
  
    id: string;
    name: string;
    inStock :boolean;
    price: number;
    imageUrl: string;
    description: string;
   }
