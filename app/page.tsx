import { BlogPosts } from 'app/components/posts'

export default function Page() {
    return (
        <section>
            <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
                Saiche Nouh
            </h1>
            <p className="mb-4">
                I'm Senior developer and a Vim enthusiast, working at <a href="https://itcomp-dz.com/" target="_blank">ITComp</a> as a full-stack developer.
                <br/>
                <br/>
                “ If, at first, you do not succeed, call it version 1.0. ― Khayri R.R. Woulfe ”
            </p>
            <div className="my-8">
                <BlogPosts />
            </div>
        </section>
    )
}
