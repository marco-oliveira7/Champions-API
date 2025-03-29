import createApp from "./app"

const app = createApp()
const port = process.env.PORT

app.listen(port, () => {
    console.log(`servidor iniciado na porta: ${port}`);
})