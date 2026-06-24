import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

type Status = 'idle' | 'sending' | 'sent' | 'error';

@Component({
  selector: 'app-contact-me',
  imports: [ReactiveFormsModule],
  templateUrl: './contact-me.html',
  styleUrl: './contact-me.css',
})
export class ContactMe {
  cv: String = 'documents/CV_Kengne_Pierre-Edwin.pdf';
  private readonly endpoint = 'https://formspree.io/f/mojojjqe';

  protected readonly email = 'pierrekengne153@gmail.com';
  protected readonly mailto = 'mailto:' + this.email;

  protected readonly status = signal<Status>('idle');
  protected readonly submitted = signal(false);

  private readonly fb = inject(FormBuilder);
  private readonly http = inject(HttpClient);

  protected readonly form = this.fb.nonNullable.group({
    nom: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    sujet: ['', Validators.required],
    message: ['', [Validators.required, Validators.minLength(10)]],
  });

  protected showError(name: 'nom' | 'email' | 'sujet' | 'message'): boolean {
    const c = this.form.controls[name];
    return c.invalid && (c.touched || this.submitted());
  }

  protected onSubmit(): void {
    this.submitted.set(true);
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.status.set('sending');
    const v = this.form.getRawValue();

    this.http
      .post(
        this.endpoint,
        {
          nom: v.nom,
          email: v.email,
          sujet: v.sujet,
          message: v.message,
          _subject: `[Portfolio] ${v.sujet}`,
        },
        { headers: { Accept: 'application/json' } },
      )
      .subscribe({
        next: () => this.status.set('sent'),
        error: () => this.status.set('error'),
      });
  }

  protected reset(): void {
    this.form.reset();
    this.submitted.set(false);
    this.status.set('idle');
  }
}
