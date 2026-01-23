import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  // Ajusta estos enlaces/datos
  public contact = {
    email: 'enricmontoya@gmail.com',
    location: 'Barcelona, ES',
    linkedin: 'https://www.linkedin.com/in/enric-s%C3%A1nchez-bb470725a/',
    github: 'https://github.com/kikee-sanchez17',
  };

  public status: 'idle' | 'loading' | 'success' | 'error' = 'idle';
  public statusMessage = '';

  form = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(60)]],
    email: ['', [Validators.required, Validators.email, Validators.maxLength(120)]],
    subject: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(120)]],
    message: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(1200)]],
    consent: [false, [Validators.requiredTrue]],
  });

  constructor(private fb: FormBuilder) {}

  get f() {
    return this.form.controls;
  }

  async onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.status = 'loading';
    this.statusMessage = '';

    try {
      // Opción A (rápida): abrir email del usuario
      const { name, email, subject, message } = this.form.value;
      const mailto = this.buildMailto({
        to: this.contact.email,
        subject: `[Portfolio] ${subject}`,
        body:
          `Name: ${name}\n` +
          `Email: ${email}\n\n` +
          `${message}\n\n` +
          `— Sent from the portfolio`,
      });
      window.location.href = mailto;

      // Si quieres mantenerlo como “enviado”:
      this.status = 'success';
      this.statusMessage = 'Your email client has opened. If not, copy the message and send it to me.';
      this.form.reset({ consent: false });

      // Opción B (recomendada): POST a tu API (Netlify/Vercel/Node) — te lo preparo si me dices dónde lo despliegas.
    } catch (e) {
      this.status = 'error';
      this.statusMessage = 'Ha ocurrido un error al intentar enviar el mensaje. Inténtalo de nuevo.';
    }
  }

  private buildMailto(params: { to: string; subject: string; body: string }) {
    const subject = encodeURIComponent(params.subject);
    const body = encodeURIComponent(params.body);
    return `mailto:${params.to}?subject=${subject}&body=${body}`;
  }
}

