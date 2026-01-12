// scss
import { use, useEffect, useState, type ReactNode } from "react";
import "./css/index.scss";

// react icons
import { CiImageOn } from "react-icons/ci";

// axios
import axios from "axios";



// types for button type
interface ButtonTypeT{
  id: number,
  label: 'sfw' | 'nsfw'
}

//types for button category(SFW)
interface ButtonCategorySFWt{
  id: number,
  label: 'waifu' 
    | 'neko' 
    | 'shinobu' 
    | 'megumin' 
    | 'bully' 
    | 'cuddle' 
    | 'cry' 
    | 'hug' 
    | 'awoo' 
    | 'kiss' 
    | 'lick' 
    | 'pat' 
    | 'smug' 
    | 'bonk' 
    | 'yeet' 
    | 'blush' 
    | 'smile' 
    | 'wave' 
    | 'highfive' 
    | 'handhold' 
    | 'nom' 
    | 'bite' 
    | 'glomp' 
    | 'slap' 
    | 'kill' 
    | 'kick' 
    | 'happy' 
    | 'wink' 
    | 'poke' 
    | 'dance' 
    | 'cringe';
}

//types for button category(SFW)
interface ButtonCategoryNSFWt{
  id: number,
  label: 'waifu' 
    | 'neko' 
    | 'trap' 
    | 'blowjob'
}


const Index = () => {

  // Select Type
  const [SelectTypeID, setSelectTypeID] = useState(1);
  const [SelectType, setSelectType] = useState('sfw')
  const ButtonType:ButtonTypeT[] = [
    {id: 1, label: 'sfw'},
    {id: 2, label: 'nsfw'}
  ]

  // Select Category for SFW
  const [SelectCategoryID, setSelectCategoryID] = useState(1);
  const [SelectCategory, setSelectCategory] = useState('waifu')
  const ButtonCategorySFW:ButtonCategorySFWt[] = [
  { id: 1, label: 'waifu' },
  { id: 2, label: 'neko' },
  { id: 3, label: 'shinobu' },
  { id: 4, label: 'megumin' },
  { id: 5, label: 'bully' },
  { id: 6, label: 'cuddle' },
  { id: 7, label: 'cry' },
  { id: 8, label: 'hug' },
  { id: 9, label: 'awoo' },
  { id: 10, label: 'kiss' },
  { id: 11, label: 'lick' },
  { id: 12, label: 'pat' },
  { id: 13, label: 'smug' },
  { id: 14, label: 'bonk' },
  { id: 15, label: 'yeet' },
  { id: 16, label: 'blush' },
  { id: 17, label: 'smile' },
  { id: 18, label: 'wave' },
  { id: 19, label: 'highfive' },
  { id: 20, label: 'handhold' },
  { id: 21, label: 'nom' },
  { id: 22, label: 'bite' },
  { id: 23, label: 'glomp' },
  { id: 24, label: 'slap' },
  { id: 25, label: 'kill' },
  { id: 26, label: 'kick' },
  { id: 27, label: 'happy' },
  { id: 28, label: 'wink' },
  { id: 29, label: 'poke' },
  { id: 30, label: 'dance' },
  { id: 31, label: 'cringe' }

  ];


    // Select Category for NSFW
    const ButtonCategoryNSFW:ButtonCategoryNSFWt[] = [
  { id: 1, label: 'waifu' },
  { id: 2, label: 'neko' },
  { id: 3, label: 'trap' },
  { id: 4, label: 'blowjob' },
  ];

  interface urlType {url: string}

  // url request
  const [URL,setURL] = useState<string>('');
  const [ButtonLoading,setButtonLoading] = useState<boolean>(false);
  const [DownloadButton,setDownloadButton] = useState(false);


    // fetch image
    const fetchWaifu = ()=>{
      setButtonLoading(true)

              const getWaifu = async () => {
                try {
                  const response = await axios.get<urlType>(
                    `https://api.waifu.pics/${SelectType}/${SelectCategory}`
                  );
                  // set url 
                setURL(response.data.url)
                } catch (error) {
                  // This block catches the error so it doesn't stay "Uncaught"
                  console.error("Failed to fetch image:", error);
                }finally{
                  // stop loading
                  setButtonLoading(false)
                  // set download to true
                  setDownloadButton(true)
                }
        };
        
        getWaifu();

  

    }





  return (<>


        <div className="mainContent">

        <h1>WAIFU GENERATOR</h1>
        <div className="left">

                  <div className={!ButtonLoading?'loader':'loader active'}>
          <div className="circle">
            <div className="dot"></div>
            <div className="outline"></div>
          </div>
          <div className="circle">
            <div className="dot"></div>
            <div className="outline"></div>
          </div>
          <div className="circle">
            <div className="dot"></div>
            <div className="outline"></div>
          </div>
          <div className="circle">
            <div className="dot"></div>
            <div className="outline"></div>
          </div>
        </div>


          <img className="defaultImg" src={URL === ''? '../assets/default.jpg' : URL} alt="default" />
          <a target="__blank" href={URL}><button disabled={!DownloadButton}><CiImageOn className="CiImageOn" /> Download</button></a>
        </div>

        <div className="right">

          <div className="type">

            <h2>Choose a type</h2>
           
           <span className="typeSpan">
        
            {ButtonType.map(({ id,label })=>(

                <button onClick={()=>{
                  setSelectTypeID(id)
                  setSelectType(label)
                }} className={id === SelectTypeID?"active":""} key={id}>{label}</button>

            ))}
       
            </span>

          </div>

          <div className="category">

              <h2>Choose a category</h2>
          

             <span className="categorySpan">
           
            {
            SelectType === 'sfw'?(
              ButtonCategorySFW.map(({id,label})=>(
                <button onClick={()=>{
                  setSelectCategory(label)
                  setSelectCategoryID(id)
                }} key={id} className={SelectCategoryID === id?'active':''} >{label}</button>
              ))

            ):
            SelectType === 'nsfw'?(
                 ButtonCategoryNSFW.map(({id,label})=>(
                <button onClick={()=>{
                    setSelectCategory(label)
                  setSelectCategoryID(id)
                }} key={id} className={SelectCategoryID === id?'active':''} >{label}</button>
              ))

            ): <h1 style={{color: 'red'}}>Error! Please reload the page.</h1>
    
            }
       
            </span>

          </div>


          <button disabled={ButtonLoading&&true} onClick={fetchWaifu}>Generate</button>


        </div>



        </div>




    </>
  )
}

export default Index