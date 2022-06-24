// import styles from "../../styles/Home.module.css";
import Head from "next/head";
import MyLayout from "../../components/layout/MyLayout";
import { useRouter } from "next/router";
import axios from "axios";
import styles from "../../styles/Product.module.css";
import { useEffect } from "react";
import Router from "next/router";


const Product = ({ name, products, children }) => {
  const router = useRouter();
  const handleDelete=(id)=>{
    axios.delete(`http://localhost:4000/v1/products/${id}`, {withCredentials: true})
    .then((res)=>{
      alert('success')
    })
    .catch((err)=>{
      alert('error')
    })
  }
  return (
    <>
      <MyLayout title="product - tokoku">
        <div className={styles.container}>
          <h1>page product</h1>
          <h3>name: {name}</h3>
          <div className={styles.cards}>

         
          {products?.map((item) => (
            <div className={styles.card} key={item.id}>
              <h4 className="text-center">{item.name}</h4>
              <p>{item.description}</p>
              <button onClick={()=>router.push(`/product/${item.id}`)}>detail</button>
              <button onClick={()=>handleDelete(item.id)}>delete</button>
            </div>
          ))}
 </div>
          <button
            className="btn btn-primary"
            onClick={() => router.push("/home")}
          >
            pindah ke home
          </button>
        </div>
        {children}
      </MyLayout>
    </>
  );
};
export async function getServerSideProps(context) {

  const cookie = context.req.headers.cookie 
  if (!cookie ){
    // Router.replace('/login')
    context.res.writeHead(302, {
      Location: `http://localhost:3000/login`
    })
    return {}
  }
  const { data: RespData } = await axios.get("http://localhost:4000/v1/products", {withCredentials: true, headers:{
    Cookie:cookie
  }});
  // console.log(data);
  const name = "risano akbar";
  return {
    props: {
      name: name,
      products: RespData.data,
    }, // will be passed to the page component as props
  };
}

// Product.getInitialProps = async (ctx) => {
//   const { data: RespData } = await axios.get("http://localhost:4000/v1/products", {withCredentials: true});
//   return { products: RespData.data }
// }

export default Product;
