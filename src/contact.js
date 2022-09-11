import Picnic from './images/picnic.jpg';

function contactContent() {
    const menuWrap = document.createElement('div');
    menuWrap.classList.add('content-wrap');

    const containerDiv = document.createElement('div');
    containerDiv.classList.add('flex-col','container','centered','align-center');
    const header = document.createElement('header');
    header.classList.add('contact-header');
    header.innerHTML = `
    <h1>Contact</h1>
                        <ul>
                            <li><span class="contact-span">Address:</span> 123 Italy Street, Vagueville</li>
                            <li>
                                <contact class="contact-span">Phone:</contact> 9999 0000
                            </li>
                            <li>
                                <contact class="contact-span">Email:</contact> ciao@cordialecucina.com
                            </li>
                        </ul>
    `;

    const formWrap = document.createElement('div');
    formWrap.classList.add('form-wrap', 'flex-col');
    formWrap.innerHTML = `
    <legend>
                            <h2>Send a message</h2>
                        </legend>
                        <form action="#" class="contact-form">
                            <label for="name">
                                <span>Name:</span>
                                <input type="text" name="name" id="name">
                            </label>
                            <label for="email">
                                <span>Email:</span>
                                <input type="email" name="email" id="email">
                            </label>
                            <label for="message">
                                <span>Message:</span>
                                <textarea name="message" id="message" cols="30" rows="10"></textarea>
                            </label>
                            <input type="submit">
                            </form>
    `;

    const contactRight = document.createElement('div');
    contactRight.classList.add('home-right','container','centered','contact-img-wrap');
    const contactImg = new Image();
    contactImg.src = Picnic;
    contactImg.classList.add('contact-img');
    contactRight.appendChild(contactImg);

    containerDiv.appendChild(header);
    containerDiv.appendChild(formWrap);
    menuWrap.appendChild(containerDiv);
    menuWrap.appendChild(contactRight);
    return menuWrap;

}

export default contactContent;