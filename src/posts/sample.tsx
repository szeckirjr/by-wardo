import { Metadata } from "next"

export default function Post() {
    return (
        <div>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
                vitae sapien ut magna aliquam placerat. Donec nec ipsum
                ultricies, tincidunt turpis nec, ultricies nulla. Nulla
                facilisi. Donec ut semper nisl. Nulla facilisi. Nullam
                vestibulum, eros sed ultricies lacinia, nunc enim aliquam
                mauris, quis aliquam nisl nunc ut urna. Sed at ipsum ac augue
                aliquam aliquet. Donec id dolor euismod, ultricies dolor
                ultricies, ultrices velit. Morbi euismod, nunc eget ultrices
                facilisis, arcu elit aliquam urna, vitae facilisis velit odio
                non quam. Donec vel nisl euismod, pretium velit vitae, cursus
                dolor. Donec euismod, lorem ac tempor facilisis, magna nunc
                ultrices justo, sed ultrices nunc elit quis nunc. Nullam
                tincidunt, nunc ut ultricies tincidunt, nunc ligula varius
                velit, sit amet ultricies magna quam ut nunc. Nulla facilisi.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Donec vel semper nisl, eget
                hendrerit nisl. Nulla facilisi. Fusce id magna euismod, aliquet
                elit vitae, ultrices odio. Donec sit amet est eget odio
                tincidunt aliquet. Nulla facilisi. Sed et quam euismod, tempus
                nunc quis, sodales quam. Donec at tellus quis sem aliquam
                ullamcorper. Sed vitae nunc sit amet nisl eleifend congue.
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis egestas. Nullam ut nulla eget nunc
                ultricies aliquam. Ut eget ipsum sed libero aliquam aliquet.
                Nullam euismod, quam eget consectetur
            </p>
        </div>
    )
}

export const metadata: Metadata = {
    title: 'My first post',
    description: 'My first post',
    authors: {
        url: 'https://wardo.dev/',
        name: 'Eduardo Szeckir',
    },
}