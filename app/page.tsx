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
                Currently i'm working on a Lis (Laboratory information system) software... 
                <br/>
                <br/>
            <strong>
                “ It's good to be smart, but it's smart to be wise. ”
                    </strong>
                
            </p>
            <div className="my-8">
                <BlogPosts />
            </div>
        </section>
    )
}
