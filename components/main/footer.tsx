import Link from "next/link"

export const Footer = () => {
  return (
    <section className="bg-blue-500 text-white p-4 flex justify-around w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pr-10">
        <div className="pl-10">
          <h3 className="font-bold mb-4">CONTACTS</h3>
          <p>联合国教科文意大利青年教育研究中心</p>
          <p>地址：独立广场8a，-50127佛罗伦萨，意大利</p>
          <p> </p>
          <p>联合国教科文意大利中心中国联络处</p>
          <p>地址：上海市静安区天目西路99号丽丰天际中心1005</p>
        </div>
        <div className="pl-10">
          <h3 className="font-bold mb-4">LINK</h3>
          {/*<Link href={'https://kipschool.org'}>联合国KIP国际学院</Link>*/}
          <p>联合国KIP国际学院 https://kipschool.org/</p>
          <p>联合国地方经济发展局 http://www.ilsleda.org/</p>
          <p>联合国南南合作办公室 https://unsouthsouth.org/</p>
        </div>
      </div>
    </section>
  )
}
