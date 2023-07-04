export default defineEventHandler(event => {
    const name = event.context.params!.name;

    const blog = blogs.find((blog, idx) => isNaN(Number(name)) ? blog.name === name : idx === Number(name));

    if (!blog) {
        throw createError({
            status: 404,
            statusMessage: 'Not Found Blog'
        });
    }

    return blog;
});