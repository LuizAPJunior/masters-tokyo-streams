import './index.css'

export type Stream = {
  user_login: string,
  user_name: string,
  viewer_count: number,
  title: string
}

export type StreamListProps = {
  streams: Stream[]
}

const StreamList = ( { streams }: StreamListProps) => {
    return(
      <main className="streamList">
        {streams.map((stream: Stream) => 
          <div key={stream.user_login} className='stream-item'>
              <a href={`https://www.twitch.tv/${stream.user_login}`} target="_blank" rel="noopener noreferrer">
                <div>
                  <img src={`https://static-cdn.jtvnw.net/previews-ttv/live_user_${stream.user_login}-400x195.jpg`} alt={stream.title}/>
                </div>
              </a>
              <a href={`https://www.twitch.tv/${stream.user_login}`} className='link-title' target="_blank" rel="noopener noreferrer">
                <p className='stream-title'>{stream.title}</p>
              </a>
              <div className='stream-usernameAndViews'>
                <a href={`https://www.twitch.tv/${stream.user_login}`} className='link-username' target="_blank" rel="noopener noreferrer">
                  <p>{stream.user_name}</p>
                </a>
                <p>{`${stream.viewer_count} views`}</p>
              </div>
          </div>
        )}
      </main>
   )
}

export default StreamList