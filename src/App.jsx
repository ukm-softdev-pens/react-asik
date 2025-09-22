import { useState } from "react";
import peko from "./assets/logo/peko.png";
import left from "./assets/logo/peek-right.png";
import right from "./assets/logo/peek-left.png";

function App() {
  const [inputValue, setInputValue] = useState(
    "Politeknik Elektronika Negeri Surabaya"
  );

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div class="w-screen overflow-y-scroll bg-[#FFF4E6] flex justify-center items-center">
      <div class="flex flex-col gap-4 mt-[50px]">
        <div class="flex flex-col gap-4">
          <div className="w-[800px] h-[300px] bg-[#FFD6A5] rounded-lg font-['Quicksand'] text-[30px] text-[#3A2E28] shadow-md flex">
            <div className="w-1/5 h-full  flex flex-col justify-end">
              <img
                className="mb-[5px]"
                src={left}
                width="110px"
                height="auto"
              />
            </div>
            <div className="w-3/5 text-center font-['Quicksand'] ">
              <div className="flex flex-col justify-center items-center h-full">
                <div className="w-full h-3/4 flex flex-col items-center justify-center ">
                  <div className="tracking-wider text-[50px]">
                    🌠 My Kisah 👽
                  </div>
                </div>
                <div className="w-full h-1/4 text-[20px] font-light flex justify-center gap-4">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={handleInputChange}
                    className="w-[400px] h-[40px] bg-transparent rounded-lg bg-gradient-to-r from-pink-400 to-orange-400 text-white text-center focus:outline-white focus:outline-[2px]"
                    max="100"
                  />
                </div>
              </div>
            </div>
            <div className="w-1/5 h-full flex justify-end-safe items-start">
              <img
                className="mt-[10px] mr-[-5px]"
                src={right}
                width="110px"
                height="auto"
              />
            </div>
          </div>
        </div>
        <div className="w-[800px] h-full bg-[#FFD6A5] rounded-lg font-['Quicksand'] text-[30px] text-[#3A2E28] shadow-md mb-[50px]">
          <div className="relative w-full flex flex-col justify-center items-center text-center">
            <div className="flex items-center justify-center gap-8 pt-5">
              <img src={peko} width="140px" height="auto" />
            </div>

            <div className="w-[80%] flex justify-center mt-[20px] items-center text-[20px] mb-[50px]">
              Sebagai lelucon, aku pergi ke rumah temanku memakai wig dan baju{" "}
              Pekora. Aku hampir tidak bisa menahan tawa melihatnya memerah
              seperti tomat dan menatapku dari ujung kepala ke ujung kaki dengan
              sedikit {inputValue} menetes dari mulutnya. Cara dia menatap
              membuatku merasa agak aneh juga, tapi aku memutuskan untuk
              menggodanya lebih jauh dengan melepas {inputValue}-ku. Dia
              bertanya, "Kamu serius?" dan kujawab, "IyaPeko." Dia terdiam lama
              sekali, jadi kutanya, "Ada apa Peko?" Dia bilang dia bingung, tapi
              kemudian {inputValue}
              -nya menjadi sangat keras, sehingga aku pun melepas {inputValue}
              -nya. Aku mengira dia akan berteriak, "Jangan!" saat aku mencium
              dan mengelus {inputValue}-nya, tapi dia malah berteriak "Ya Tuhan,{" "}
              {inputValue}!" yang malah membuat {inputValue}-ku menjadi keras
              juga. Tanpa kusadari, aku pertama kalinya memberinya {inputValue}{" "}
              sampai dia keluar. {inputValue}
              -nya sangat tebal, sampai {inputValue}-nya tersangkut di
              tenggorokanku tak peduli seberapa keras aku menelan. Dia lalu
              berkata, "Aku ingin {inputValue} kamu sekarang!" dan melihat bahwa
              kita sudah sampai sejauh itu dan kita berdua sudah {inputValue},
              aku pun menurutinya. Beberapa jam kemudian, si brengsek itu
              menjadi pucat dan berkata kepadaku, "Kenapa kita melakukan itu?
              Sekarang aku tidak {inputValue} lagi." Tapi dia masih terlihat
              sangat imut dengan kebingungannya itu, jadi aku kasihan dan
              meyakinkannya sambil mengusap {inputValue}-nya dari wajahku,
              "Anggap saja aku masih {inputValue}."
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
