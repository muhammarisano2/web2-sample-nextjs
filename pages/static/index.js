import axios from "axios"
import {useRouter} from 'next/router'
const StaticProduct = ({products}) => {
    const router = useRouter()
  return (
    <div>
        <h1>halaman static</h1>
        <ul>
            {products.map((item)=>(
                <li key={item.id} onClick={()=>router.push(`/static/${item.id}`)}>{item.name} - id: {item.id}</li>
            ))}
            
        </ul>
    </div>
  )
}

export const getStaticProps =async()=>{
    const { data: RespData } = await axios.get("http://localhost:4000/v1/products");
    return {
        props:{
            products: RespData.data
        }
    }
}

  
export default StaticProduct