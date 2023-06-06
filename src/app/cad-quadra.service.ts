import * as firebase from "firebase";

export class CadQuadra {
    public key: any

    public Salvar(dados: any): void {
        firebase.database().ref(`Quadras`)
            .push({ endereco: dados.endereco, numero: dados.numero, nome_usuario: dados.nome_usuario })
            .then((key) => {
                this.key = key.key
                console.log('salvo')
                firebase.storage().ref().child(`quadras/${this.key}`)
                    .put(dados.imagem)
                    .then((snapshot) => {
                        snapshot.ref.getDownloadURL()
                            .then((url: any) => {
                                console.log(`url da imagem recuperada: ${url}`);
                                firebase.database().ref(`Quadras/${this.key}`)
                                    .update({ 'url': url,'key':this.key })
                                    .then(() => {
                                        console.log('Imagem Salva ');
                                    })
                            })

                    })
            })
    }
    public RecuperarQuadras(): Promise<any> {
        return new Promise((resolve, reject) => {
            firebase.database().ref(`Quadras`)
                .orderByKey()
                .once('value')
                .then((snapshot: any) => {
                    let consulta: Array<any> = []
                    snapshot.forEach((child: any) => {
                        let teste = child.val()
                        consulta.push(teste)
                        resolve(consulta)
                    })
                })
        })

    }

    public async Deletar(): Promise<any> {
        return new Promise((resolve, reject) => {
            let date = ''
            let teste = firebase.database().ref()
            teste.remove()
                .then(() => {
                    console.log('deletado')
                    console.log(date)
                })



        })


    }

    public testando(dados: any): Promise<any> {
        return new Promise((resolve, reject) => {
            let date = ''
            console.log(dados)
            firebase.database().ref(`Quadras/${dados}`)
            .remove()
                .then(() => {
                    firebase.storage().ref().child(`quadras/${dados}`)
                    .delete()
                    .then(()=>{
                        console.log('deletado do storage')
                    })
                    resolve('ok')
                })
                .catch((erro:Error)=>{
                    console.error()
                })
        })
    }

    public Nome(email: string): string {
        let nome: string = ""
        firebase.database().ref(`usuario_detalhe/${btoa(email)}`)
            .on('value', (snapshot: any) => {
                snapshot.forEach((childSnapshot: any) => {
                    const dadosUsuario = childSnapshot.val();
                    nome = dadosUsuario.nome_usuario
                    console.log(dadosUsuario.nome_usuario);
                });
            });


        return nome
    }
}
