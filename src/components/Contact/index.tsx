import { useState } from "react";
import ContactSuccess from "../ContactSuccess";
import "./styles.css";

import axios from "axios";
import github from "../../assets/Icons/Github.svg";
import instagram from "../../assets/Icons/Instagram.svg";
import linkedin from "../../assets/Icons/Linkedin.svg";

const initialState = {
    name: '',
    subject: '',
    email: '',
    message: '',
};

export default function Contact() {

    const [successOpen, setSuccessOpen] = useState(false);

    const [formData, setFormData] = useState(initialState);



    const handleSnackbarClose = () => {
        setSuccessOpen(false);
    };

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event: any) => {
        event.preventDefault();

        try {
            await enviarDadosParaAPI(formData);

            setFormData(initialState);

            setSuccessOpen(true);
        } catch (error) {
            console.error('Erro ao enviar dados para a API', error);
        }
    };

    const enviarDadosParaAPI = async (data: any) => {

        const response = await axios.post('https://formsubmit.co/e7c8476beae1b89e3d41a0b5541499c8', data);
        if (response.status !== 200) {
            throw new Error('Erro ao enviar dados para a API');
        }
    };

    return (

        <section id="contact" className="ptf-contact-section">
            <div className="ptf-contact-container">
                <div>
                    <div className='ptf-contact-title'>
                        <svg
                            width="61"
                            height="20"
                            viewBox="0 0 61 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">

                            <rect width="54"
                                height="4"
                                rx="2"
                                fill="#0f7db8"
                                fillOpacity="0.58"></rect>

                            <rect y="16"
                                width="54"
                                height="4"
                                rx="2"
                                fill="#0f7db8"
                                fillOpacity="0.58"></rect>

                            <rect x="7"
                                y="8"
                                width="54"
                                height="4"
                                rx="2"
                                fill="#0f7db8"
                                fillOpacity="0.58"></rect>
                        </svg>
                        <h1 className="heading">Contato</h1>
                        <svg
                            width="61"
                            height="20"
                            viewBox="0 0 61 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">

                            <rect width="54"
                                height="4"
                                rx="2"
                                fill="#0f7db8"
                                fillOpacity="0.58"></rect>

                            <rect y="16"
                                width="54"
                                height="4"
                                rx="2"
                                fill="#0f7db8"
                                fillOpacity="0.58"></rect>

                            <rect x="7"
                                y="8"
                                width="54"
                                height="4"
                                rx="2"
                                fill="#0f7db8"
                                fillOpacity="0.58"></rect>
                        </svg>
                    </div>
                    <div className="ptf-contact-form-container">
                        <div className="ptf-contact-form-card">
                            <div className="ptf-contact-form-center">
                                <form
                                    action="https://formsubmit.co/e7c8476beae1b89e3d41a0b5541499c8"
                                    method="POST"
                                    className="ptf-contact-form"
                                    onSubmit={handleSubmit}
                                >
                                    <div className="ptf-contact-form-data">


                                        <label>Nome</label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder="Digite seu nome"
                                            required
                                        />
                                        <label>Assunto</label>
                                        <input
                                            type="text"
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            placeholder="Digite o assunto"
                                            required
                                        />
                                        <label>Email</label>
                                        <input
                                            type="text"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder="Digite seu email"
                                            required
                                        />
                                        <label>Mensagem</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            cols={30}
                                            rows={10}
                                            placeholder="Digite sua mensagem"
                                        ></textarea>

                                    </div>

                                    <button className="ptf-form-button" type="submit">
                                        <p>Enviar</p>
                                    </button>

                                </form>
                            </div>
                            <ContactSuccess open={successOpen} onClose={handleSnackbarClose} />
                        </div>

                        <div className="ptf-card-more-contact">
                            <div className="ptf-more-contact">
                                <div>
                                    <h1> Email para contato</h1>
                                    <h4>luscafernandes027@gmail.com</h4>
                                </div>

                            </div>
                            <div className="ptf-social-card">
                                <div className="ptf-social-card-contact">
                                    <div className="ptf-social-contact">
                                        <img src={instagram} alt="" />
                                        <a href="https://www.instagram.com/lfernande_s"
                                            target="_blank"><h1>@lfernande_s</h1></a>
                                    </div>
                                    <div className="ptf-social-contact">
                                        <img src={linkedin} alt="" />
                                        <a href="https://www.linkedin.com/in/lucas-fernandes-botelho/"
                                            target="_blank"><h1>Lucas Fernandes</h1></a>
                                    </div>

                                    <div className="ptf-social-contact">
                                        <img src={github} alt="" />
                                        <a href="https://github.com/lfernandex"
                                            target="_blank"><h1>lfernande_x</h1></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



            </div>
        </section>
    )
}