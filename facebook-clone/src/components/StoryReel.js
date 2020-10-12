import React from 'react'
import '../css/storyReel.css'
import Story from './Story'

function StoryReel() {
    return (
        <div className = 'storyReel'> 
            
            <Story 
                image = 'https://images.pexels.com/photos/775201/pexels-photo-775201.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
                profileSrc = 'https://scontent.fpat2-1.fna.fbcdn.net/v/t1.0-1/p200x200/68824823_2377561805632459_8332749094162268160_o.jpg?_nc_cat=104&_nc_sid=7206a8&_nc_ohc=mAO250Ol6IYAX98albl&_nc_ht=scontent.fpat2-1.fna&tp=6&oh=a5cb8f7f1c6a6a265759686f8f284650&oe=5F9B1B1C'
                title = 'Anubhav Kumar'
            />
            <Story 
                image = 'https://images.pexels.com/photos/3690511/pexels-photo-3690511.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260'
                profileSrc = 'https://scontent.fpat2-1.fna.fbcdn.net/v/t1.0-1/s200x200/27654507_1264990236978812_8271151656019894692_n.jpg?_nc_cat=109&_nc_sid=7206a8&_nc_ohc=2MLedfwVjLIAX_Cr0PQ&_nc_oc=AQkQvE-yUZI138V8bjW0DBIsf97h8ONyjVJyjAH_pJqq-8aow8PmlnOWd8FcU6EVNsk&_nc_ht=scontent.fpat2-1.fna&tp=7&oh=d75539b476dd2cfdbeebf3d320d41ef6&oe=5F9BE2B8'
                title = 'Mohd Zaid'
            />
            <Story 
                image = 'https://images.pexels.com/photos/2896668/pexels-photo-2896668.jpeg?cs=srgb&dl=pexels-trace-hudson-2896668.jpg&fm=jpg'
                profileSrc = 'https://scontent.fpat2-1.fna.fbcdn.net/v/t31.0-1/p200x200/27748258_1996490890565307_4008614193702774814_o.jpg?_nc_cat=110&_nc_sid=7206a8&_nc_ohc=fpt4__TerfwAX8tN8TD&_nc_ht=scontent.fpat2-1.fna&tp=6&oh=b80fd1ab8c82b2b93cf42716cd1f6fed&oe=5F999F32'
                title = 'Vasu Bhardwaj'
            />
            <Story 
                image = 'https://images.pexels.com/photos/5274440/pexels-photo-5274440.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                profileSrc = 'https://scontent.fpat2-1.fna.fbcdn.net/v/t1.0-1/s200x200/119699488_2378156369158999_6197690730721272719_n.jpg?_nc_cat=106&_nc_sid=7206a8&_nc_ohc=bZku8LDOSKYAX9bzc5Q&_nc_ht=scontent.fpat2-1.fna&tp=7&oh=5ea00911cbd24e33059043e7161d812e&oe=5F9A8656'
                title = 'Aviral Kandari'
            />
            <Story 
                image = 'https://images.pexels.com/photos/1274260/pexels-photo-1274260.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
                profileSrc = 'https://scontent.fpat2-1.fna.fbcdn.net/v/t31.0-1/p200x200/29873508_2092601910976156_1685341945257114629_o.jpg?_nc_cat=107&_nc_sid=7206a8&_nc_ohc=-KDlRN_MPzkAX8pZ9go&_nc_ht=scontent.fpat2-1.fna&tp=6&oh=7c154402e37c90647d54ee5a336a9e44&oe=5F9BF7E3'
                title = 'Amit Kashyap'
            />

        </div>
    )
}

export default StoryReel
