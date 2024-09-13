## we use useEffect 
hum ny useeffect ka use kiya q k humara concern ya ta k jo fetching date a raha hai 

## show the fetched date on ui 
ab useEffect k trough humy date to fetch ho kar a gaya hai ab hum jahtay hai k date ui yahi frontend pr nazr aye is k liy humy useState use karni ho gi , date ko ui me update karny k liy hum useState ka istamal karty hai . 
hum ny ak useState bana      const [getdate, setgetdate] = useState([]) humy ny usestate me empty array rahk di mean jo data aye wo is me store ho jy . ab hum apna state me date set karvaty hai , 
jo response hum ny useEffect sy get kiya or ak varibable me store karvaya ab hum os ko state me set karvay gy tak k huamri state update hojy . function me ja kar  me ja kar hum ny write kiya setgetdate(variablename)

### showing date
humari state to update ho gi hai par ab hum jhate hai k humari ui me new card add ho har new object k liy , q k jo date humay mila hai wo [{},{},{}] wo array k under multipla object hai har object k liy new card bany , to yaha par hum map ka use kary gy or har object pr new card create karvy gy ,
        {getdate.map((items)=><Card/>)}
hum ny main function k return me ja kar ya write kiya matlab kaya k is value ko pakro or map karo har item ko item mean object present our array and return a card on every function 