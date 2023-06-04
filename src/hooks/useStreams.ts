import { useEffect, useState } from 'react'
import { Stream } from '../components/StreamList'


const useStream = () => {

    const [streamData, setStreamData] = useState<Stream[]>([])

    useEffect(() => {
       
        // const usernames = [
        //     'valorant_jpn', 'sliggytv', 'thinkingmansvalo',
        //     'soulcas', 'superjamppi', 'iredgar', 'nats', 'sayfdj',
        //     'OfficialBoaster', 'derke', 'Alfajer', 'leojanne', 'chronicle',
        //     'aspaszin', 'lessvlr', 'saadhak', 'cauanzinvlr', 'tuyzvlr',
        //     'prxmindfreak', 'PRXf0rsakeN', 'prxd4v41', 'jingggxd', 'smthlikeyou11',
        //     'mojjvlr', 'qraxs', 'qw1vl', 'mrfalin', 'atakaptanvl',
        //     'ange1', 'shaolele1', 'zyppaan', 'suygetsu', 'cNed',
        //     's0mcs', 'goFNS', 'crashies', 'victor', 'ardiis',
        //     'boostio', 'ethancs', 'jawgemo', 'C0Mfps', 
        //     'staxvlrt', 'rb0f', 'buzzkr', 'makovlrt', 'foxy9fps', 'drx_zest',
        //     'xeta', 'munchking', 'ban_val', 'sayaplayer4', 'carpe', 'introw0w',
        //     'yhchen0411'    
        // ]  
    
       // let apiURL = 'https://api.twitch.tv/helix/streams?first=100&user_login=valorant' 
        
        const apiURL = 'https://api.twitch.tv/helix/streams' 

        // for(const username of usernames){
        //     apiURL += `&user_login=${username}`
        // }
        const authData = {
            'client_id': import.meta.env.VITE_CLIENT_ID,
            'client_secret': import.meta.env.CLIENT_SECRET,
            'grant_type': 'client_credentials'
        }

        fetch('https://id.twitch.tv/oauth2/token',{
            method: 'POST',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(authData)
        })
        .then(response => {
            if(response.ok){
                return response.json()
            }
        })
        .then(data => console.log("token?", data))
        .catch(error => console.error("Error: ", error))
    

        fetch('https://id.twitch.tv/oauth2/validate',
            {
                method: 'GET',
                headers: {
                    Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`   
                },
                
            })
            .then( response => { 
                if(response.ok){
                    return response.json()
                }
            })
            .then(data => console.log(data))
            .catch(error => console.error("Error: ", error))

     
        fetch(apiURL,
        {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${import.meta.env.VITE_TOKEN}`,
                'Client-Id': `${import.meta.env.VITE_CLIENT_ID}` 
            }
        })
        .then( response => { 
            if(response.ok){
                return response.json()
            }
        })
        .then(dataObj => {
            console.log(dataObj['data']);
            
            setStreamData(dataObj['data'])
        })  
        .catch(error => console.error("Error: ", error)
        )
    },[])

    return streamData
}

export default useStream