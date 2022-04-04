import React from 'react'
import { useState } from 'react';

function List() {
    /* 
    useState Hook'u ile tanımlamış olduğumuz headDuty, duty, selectPerson ve list state değişkenlerini setHeadDuty, setDuty, setSelectPerson ve setList fonksiyonlarına bağlarız.
    
    Bu bağlama sonucunda değişkenlerdeki değeri(value) elimizde tutar ve set fonksiyonu ile bu değerleri değiştirebilir hale getiririz.
    
    Bir değişken ve fonk  useState hook'u ile tanımlarken parantez içerisinde oluşturulacak içerğin dizi ya da obje veya sadece bir değişken olduğunu dikkat ederek belirtiriz. 
    Örneğin list değişkeni ve fonksiyonu duty ve select değerlerini tutucağı için bir dizi olarak tanımlanmıştır. bu tanımlama üzerine işlemlerimizi devam ederiz.
    
    onChange eventi ile girdinin değerindeki değişikliği tutarız. set fonksiyonu ile bu değişikli tutarız.

    onClick eventi ile butona tıklandığında nasıl bir etkinlikte bulunacağını belirtiriz. Bu örnekte onclick yaptığımız takdirde setList fonksiyonu ile inputlarda girilmiş değerleri list'e taşırız.
    
    setDuty("") ile inputlardaki değerleri gönderdikten sonra input değerini resetleriz.

    list arrayinin her bir elemenanını ekrana yazdırmak için map fonksiyonunu (map()) kullanırız. map fonkisyonu içerisinde kullanılan index verisi ise list dizisine eklenen her son elemanı ekrana yazdırmak 
    için kullanılır.
    */
    const [headDuty, setHeadDuty] = useState("");
    const [duty, setDuty] = useState("");
    const [selectPerson, setSelectPerson] = useState("");
    const [list, setList] = useState([]);


    return (
        <div>
            <div id='topDiv'>
                <div id='headDutyDiv'>
                    <input
                        value={headDuty}
                        onChange={e => setHeadDuty(e.target.value)}
                        placeholder='Heading of Duty'
                    />
                </div>
                <div id='dutyDiv'>
                    <input
                        value={duty}
                        onChange={e => setDuty(e.target.value)}
                        placeholder='Write here your duty!'
                    />
                </div>
                <div>
                    <select
                        value={selectPerson}
                        onChange={(e) => {

                            const selectedPersonal = e.target.value;
                            setSelectPerson(selectedPersonal);
                        }}
                    >
                        <option value='Ufuk Yetiskin'>Ufuk Yetiskin</option>
                        <option value='Ozgur Tipirdamaz'>Ozgur Tipirdamaz</option>
                    </select>
                    <button  onClick={() => setList([...list, { id: Date.now(), duty:duty, headDuty:headDuty, selectPerson:selectPerson }], setDuty(""), setHeadDuty(""))}  >Add Duty</button>
                </div>

            </div>
            <div id='buttomDiv'>
                <ul>
                    <li>
                        {list.map((item, index) => ( 
                            <div key={index}>
                                <hr></hr>
                                <ul>
                                    <li>{item.headDuty}</li>
                                    <li>{item.duty}</li>
                                    <li>{item.selectPerson}</li>
                                </ul>
                            </div>
                        ))}
                    </li>
                </ul>

            </div>




        </div>
    )
}

export default List