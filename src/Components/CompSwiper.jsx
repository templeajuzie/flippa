// // import "swiper/css";
// // import "swiper/css/pagination";
// // import "swiper/css/navigation";
// // import { Swiper, SwiperSlide } from "swiper/react";
// // // Import Swiper styles
// // // import required modules
// // import { Autoplay, Pagination, Navigation } from "swiper";
// import styled from "styled-components";



// const CompSwiper = () => {
//   const General = styled.div`
//     .swiper {
//       width: 100%;
//       height: 00%;
//     }

//     .swiper-slide {
//       text-align: center;
//       font-size: 18px;
//       background: #fff;
//       /* Center slide text vertically */
//       display: -webkit-box;
//       display: -ms-flexbox;
//       display: -webkit-flex;
//       display: flex;
//       -webkit-box-pack: center;
//       -ms-flex-pack: center;
//       -webkit-justify-content: center;
//       justify-content: center;
//       -webkit-box-align: center;
//       -ms-flex-align: center;
//       -webkit-align-items: center;
//       align-items: center;
//     }

//     .swiper-slide img {
//       display: block;
//     }
//   `;
    
//     const testslide1 = new URL(
//       "../../Resources/images/testslide1.png",
//       import.meta.url
//     );
//     const testslide2 = new URL(
//       "../../Resources/images/testslide2.png",
//       import.meta.url
//     );
//     const testslide3 = new URL(
//       "../../Resources/images/testslide3.png",
//       import.meta.url
//     );
//     const testslide4 = new URL(
//       "../../Resources/images/testslide4.png",
//       import.meta.url
//     );
//     const testslide5 = new URL(
//       "../../Resources/images/testslide5.png",
//       import.meta.url
//     );
//     const testslide6 = new URL(
//       "../../Resources/images/testslide6.png",
//       import.meta.url
//     );
//     const testslide7 = new URL(
//       "../../Resources/images/testslide7.png",
//       import.meta.url
//     );

//   return (
//     <General>
//       <Swiper
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 2500,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         modules={[Autoplay, Pagination, Navigation]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//           <div className="card8">
//             <img src={testslide1} alt="" />
//           </div>
//           <div className="card8 card8b">
//             <h4>
//               {" "}
//               <i class="fa-solid fa-quote-left"></i> Save Time Managing your
//               online store
//             </h4>

//             <p>
//               Is be upon sang fond must shew. Really boy law county she <br />{" "}
//               unable her sister. Feet you off its like like six. Among sex are{" "}
//               <br /> leave law built now. In built table in an rapid blush.
//               Merits behind <br /> on afraid or warmly. <br /> <br />
//               Believing neglected so so allowance existence departure in. <br />
//               In design active temper be uneasy.{" "}
//             </p>

//             <p>
//               <i class="fa-solid fa-star"></i>
//               <i class="fa-solid fa-star"></i>
//               <i class="fa-solid fa-star"></i>
//               <i class="fa-solid fa-star"></i>
//               <i class="fa-regular fa-star"></i>
//             </p>

//             <h4>
//               James Swandy <span>Product Mang. @Brastool</span>
//             </h4>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="card8">
//             <img src={testslide2} alt="" />
//           </div>
//           <div className="card8 card8b">
//             <h4>
//               {" "}
//               <i class="fa-solid fa-quote-left"></i> Save Time Managing your
//               online store
//             </h4>

//             <p>
//               Is be upon sang fond must shew. Really boy law county she <br />{" "}
//               unable her sister. Feet you off its like like six. Among sex are{" "}
//               <br /> leave law built now. In built table in an rapid blush.
//               Merits behind <br /> on afraid or warmly. <br /> <br />
//               Believing neglected so so allowance existence departure in. <br />
//               In design active temper be uneasy.{" "}
//             </p>

//             <p>
//               <i class="fa-solid fa-star"></i>
//               <i class="fa-solid fa-star"></i>
//               <i class="fa-solid fa-star"></i>
//               <i class="fa-solid fa-star"></i>
//               <i class="fa-regular fa-star"></i>
//             </p>

//             <h4>
//               Jenny Mandy <span>CEO. @Kandra Cosmetics</span>
//             </h4>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="card8">
//             <img src={testslide3} alt="" />
//           </div>
//           <div className="card8 card8b">
//             <h4>
//               {" "}
//               <i class="fa-solid fa-quote-left"></i> Save Time Managing your
//               online store
//             </h4>

//             <p>
//               Is be upon sang fond must shew. Really boy law county she <br />{" "}
//               unable her sister. Feet you off its like like six. Among sex are{" "}
//               <br /> leave law built now. In built table in an rapid blush.
//               Merits behind <br /> on afraid or warmly. <br /> <br />
//               Believing neglected so so allowance existence departure in. <br />
//               In design active temper be uneasy.{" "}
//             </p>

//             <p>
//               <i class="fa-solid fa-star"></i>
//               <i class="fa-solid fa-star"></i>
//               <i class="fa-solid fa-star"></i>
//               <i class="fa-solid fa-star"></i>
//               <i class="fa-regular fa-star"></i>
//             </p>

//             <h4>
//               Ahmed Kareem <span>Sales Expert. @Swiss Inc</span>
//             </h4>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="card8">
//             <img src={testslide4} alt="" />
//           </div>
//           <div className="card8 card8b">
//             <h4>
//               {" "}
//               <i class="fa-solid fa-quote-left"></i> Save Time Managing your
//               online store
//             </h4>

//             <p>
//               Is be upon sang fond must shew. Really boy law county she <br />{" "}
//               unable her sister. Feet you off its like like six. Among sex are{" "}
//               <br /> leave law built now. In built table in an rapid blush.
//               Merits behind <br /> on afraid or warmly. <br /> <br />
//               Believing neglected so so allowance existence departure in. <br />
//               In design active temper be uneasy.{" "}
//             </p>

//             <p>
//               <i class="fa-solid fa-star"></i>
//               <i class="fa-solid fa-star"></i>
//               <i class="fa-solid fa-star"></i>
//               <i class="fa-solid fa-star"></i>
//               <i class="fa-regular fa-star"></i>
//             </p>

//             <h4>
//               Joshua Anderson <span>MARKETTING MANAGER. @Tindat Const</span>
//             </h4>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="card8">
//             <img src={testslide5} alt="" />
//           </div>
//           <div className="card8 card8b">
//             <h4>
//               {" "}
//               <i class="fa-solid fa-quote-left"></i> Save Time Managing your
//               online store
//             </h4>

//             <p>
//               Is be upon sang fond must shew. Really boy law county she <br />{" "}
//               unable her sister. Feet you off its like like six. Among sex are{" "}
//               <br /> leave law built now. In built table in an rapid blush.
//               Merits behind <br /> on afraid or warmly. <br /> <br />
//               Believing neglected so so allowance existence departure in. <br />
//               In design active temper be uneasy.{" "}
//             </p>

//             <p>
//               <i class="fa-solid fa-star"></i>
//               <i class="fa-solid fa-star"></i>
//               <i class="fa-solid fa-star"></i>
//               <i class="fa-solid fa-star"></i>
//               <i class="fa-regular fa-star"></i>
//             </p>

//             <h4>
//               Aradhya Anik <span>Human Resource Mngr @Silva Ind</span>
//             </h4>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="card8">
//             <img src={testslide6} alt="" />
//           </div>
//           <div className="card8 card8b">
//             <h4>
//               {" "}
//               <i class="fa-solid fa-quote-left"></i> Save Time Managing your
//               online store
//             </h4>

//             <p>
//               Is be upon sang fond must shew. Really boy law county she <br />{" "}
//               unable her sister. Feet you off its like like six. Among sex are{" "}
//               <br /> leave law built now. In built table in an rapid blush.
//               Merits behind <br /> on afraid or warmly. <br /> <br />
//               Believing neglected so so allowance existence departure in. <br />
//               In design active temper be uneasy.{" "}
//             </p>

//             <p>
//               <i class="fa-solid fa-star"></i>
//               <i class="fa-solid fa-star"></i>
//               <i class="fa-solid fa-star"></i>
//               <i class="fa-solid fa-star"></i>
//               <i class="fa-regular fa-star"></i>
//             </p>

//             <h4>
//               Ayomide Segun <span>CEO. @JEBRA STORE NG</span>
//             </h4>
//           </div>
//         </SwiperSlide>
//         <SwiperSlide>
//           <div className="card8">
//             <img src={testslide7} alt="" />
//           </div>
//           <div className="card8 card8b">
//             <h4>
//               {" "}
//               <i class="fa-solid fa-quote-left"></i> Save Time Managing your
//               online store
//             </h4>

//             <p>
//               Is be upon sang fond must shew. Really boy law county she <br />{" "}
//               unable her sister. Feet you off its like like six. Among sex are{" "}
//               <br /> leave law built now. In built table in an rapid blush.
//               Merits behind <br /> on afraid or warmly. <br /> <br />
//               Believing neglected so so allowance existence departure in. <br />
//               In design active temper be uneasy.{" "}
//             </p>

//             <p>
//               <i class="fa-solid fa-star"></i>
//               <i class="fa-solid fa-star"></i>
//               <i class="fa-solid fa-star"></i>
//               <i class="fa-solid fa-star"></i>
//               <i class="fa-regular fa-star"></i>
//             </p>

//             <h4>
//               Brandon Scofield <span>Human Reasource Mngr @Flipmart</span>
//             </h4>
//           </div>
//         </SwiperSlide>
//       </Swiper>
//     </General>
//   );
// };

// export default CompSwiper;
