import React, {useEffect, useState} from 'react'

const Places = [
  { name: 'Il secin', districts:['ilce secin']},
  { name: 'Hatay', districts: ['Antakya', 'Altinozu', 'Arsuz', 'Belen', 'Defne', 'Dörtyol', 'Erzin', 'Hassa', 'İskenderun', 'Kirikhan', 'Kumlu', 'Payas', 'Samandag', 'Reyhanli', 'Yayladagi'] },
  { name: 'Adana', districts: ['Aladag', 'Ceyhan', 'Cukurova', 'Feke', 'Imamoglu', 'Karaisali', 'Karatas', 'Kozan', 'Pozanti', 'Saimbeyli', 'Saricam', 'Seyhan', 'Tufanbeyli', 'Yumurtalik', 'Yuregir'] },
  { name: 'Adiyaman', districts: ["Besni", "Celikhan", "Gerger", "Kahta", "Merkez", "Golbasi", "Samsat", "Sincik", "Tut"] },
  { name: 'Diyarbakir', districts: ["Baglar", "Bismil", "Çermik", "Cinar", "Cüngüs", "Dicle", "Egil", "Ergani", "Hani", "Hazro", "Kayapinar", "Kocaköy", "Kulp", "Lice", "Su", "Silvan", "Yenisehir"] },
  { name: 'Osmaniye', districts: ["Bahce", "Düzici", "Hasanbeyli", "Kadirli", "Merkez", "Sumbas", "Toprakkale"] },
  { name: 'Gaziantep', districts: ["Oguzeli", "Sahinbey", "Yavuzeli", "Islahiye", "Nizip", "Araban", "Nurdagi", "Karkamis", "Nurdagi", "Sehitkamil"] },
  { name: 'Kilis', districts: ["Elbeyli", "Kilis", "Musabeyli", "Polateli"] },
  { name: 'Kahramanmaras', districts: ["Afsin", "Andirin", "Çağlayancerit", "Dulkadiroğlu", "Ekinözü", "Elbistan", "Göksun", "Nurhak", "Onikisubat", "Pazarcik", "Turkoglu"] },
  { name: 'Sanliurfa', districts: ["Akcakale", "Birecik", "Bozova", "Ceylanpinar", "Eyyubiye", "Halfeti", "Haliliye", "Harran", "Hilvan","Karakopru", "Siverek", "Suruc", "ViranSehir"] },
  { name: 'Malatya', districts: ["Akcadag", "Arapgir", "Arguvan", "Battalgazi", "Darende", "Dogansehir","Doganyol", "Hekimhan", "Kale", "Kuluncak", "Pütürge", "Yazihan", "Yesilyurt"] },
];

const needEnum = [
  'Yardim turu', 'Barinma', 'Yiyecek', 'Isinma', 'Diger'
];

const PublishFrom = () => {
  const [provinceIndex, setProvinceIndex] = useState(0);
  const [data, setData] = useState({
    city: {
      name: null,
      districts: null,
    },
    hosts: {
      status: null,
      name: null,
      contactNo: null,
    },
    neighborhood: null,
    description: null
  });
  
  const SelectProvince = (param) => {
    setProvinceIndex(param);
    setData({...data, city: {...data.city, name: Places[param].name}});
  }

  const SelectCity = (param) => {
    setData({...data, city: {...data.city, districts: param}});
  }

  const SelectNeed = (param) => {
    setData({...data, hosts: {...data.hosts, status: param}});
  }

  const TypeFullName = (param) => {
    setData({...data, hosts: {...data.hosts, name: param}});
  }

  const TypeContactNo = (param) => {
    setData({...data, hosts: {...data.hosts, contactNo: param}});
  }

  const TypeDistrict = (param) => {
    setData({...data, neighborhood: param});
  }

  const TypeDesc = (param) => {
    setData({...data, description: param});
  }

  const SubmitData = () => {
    console.log(data);
  }

  useEffect(() => {});
  console.log(provinceIndex);
  return (
    <div className="publish-form-main">
      <select name="Il" onChange={(e) => SelectProvince(e.target.value)}>
        {
          Places.map((item, i) =>
            <option value={i} key={item.name} >{item.name}</option>
          )
        }
      </select>
      <select name="Ilce" onChange={(e) => SelectCity(e.target.value)}>
        {
          Places[provinceIndex].districts.map((item) =>
            <option value={item} key={item}>{item}</option>
          )
        }
      </select>
      <select name="Ihtiyac Turu" onChange={(e) => SelectNeed(e.target.value)}>
        {
          needEnum.map((item) =>
            <option value={item} key={item}>{item}</option>
          )
        }
      </select>
      <input className="form-input" placeholder='Ihtiyac sahibi isim soyisim' onBlur={(e) => TypeFullName(e.target.value)} />
      <input className="form-input" placeholder='Mahalle / sokak / apartman' onBlur={(e) => TypeDistrict(e.target.value)} />
      <input className="form-input" placeholder='Aciklama' onBlur={(e) => TypeDesc(e.target.value)} />
      <input type="tel" className="form-input" placeholder='Tel No' onBlur={(e) => TypeContactNo(e.target.value)} />
      <button className="publish-button" onClick={() => SubmitData()}>ILAN EKLE</button>
    </div>
  )
}

export default PublishFrom;
