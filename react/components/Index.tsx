import React, {useEffect} from 'react';
import { useProduct } from 'vtex.product-context';
import BannerComponent from "./Banner-component";

type Props = {
  text: string
}

export default function Index({text}: Props) {
  const productContextValue = useProduct();
  console.log("productContextValue:", productContextValue)

  useEffect(() => {
    if (!productContextValue) {
      console.log("Cargandooo");
    }
  }, [productContextValue])


  return (
    <div>
      {productContextValue?.product?.categories[1] == "/Moda para Hombre/" ? <BannerComponent text={text}/> : null}
    </div>
  )
}
