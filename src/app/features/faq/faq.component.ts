import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface FAQ {
  id: string;
  category: string;
  question: string;
  answer: string;
}

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  // --- State ---
  searchTerm = signal('');
  activeCategory = signal<'overbilling' | 'shortages' | 'invoices' | 'audits'>('overbilling');

  // --- FAQ Data ---
  faqData: FAQ[] = [
    // Overbilling
    {
      id: 'ob1',
      category: 'overbilling',
      question: "What exactly has changed with Amazon's co-op billing?",
      answer:
        "Amazon now calculates co-op deductions based on the actual amount they pay you, not on when they receive the goods. This change helps avoid errors from misreceiving or their smart matching system, which often led to inflated co-op charges."
    },
    {
      id: 'ob2',
      category: 'overbilling',
      question: 'Will this fix past overbilling issues on my account?',
      answer:
        'No, unfortunately not. The change is only applied moving forward. Any co-op deductions from March 2023 to November 2024 still need to be reviewed and disputed if incorrect.'
    },
    {
      id: 'ob3',
      category: 'overbilling',
      question: 'How can I identify overbilling in my account?',
      answer:
        'Look for discrepancies between expected co-op rates and actual deductions. Check for duplicate charges, incorrect percentages, or charges on items that should be exempt from co-op fees.'
    },
    {
      id: 'ob4',
      category: 'overbilling',
      question: 'What documentation do I need to dispute overbilling?',
      answer:
        'Gather your vendor agreements, purchase orders, invoices, and any correspondence with Amazon regarding co-op terms. Screenshots of your Vendor Central reports can also be helpful.'
    },

    // Shortages
    {
      id: 'sh1',
      category: 'shortages',
      question: 'What are aged shortages and how do they differ from current shortages?',
      answer:
        'Aged shortages are inventory discrepancies that have been outstanding for more than 30 days. Current shortages are recent discrepancies, typically within the last 30 days. Aged shortages may require additional documentation to resolve.'
    },
    {
      id: 'sh2',
      category: 'shortages',
      question: 'How long do I have to dispute a shortage claim?',
      answer:
        "You typically have 60 days from the date Amazon notifies you of the shortage to dispute it. However, it's best to address shortages as quickly as possible to ensure you have access to all necessary documentation."
    },
    {
      id: 'sh3',
      category: 'shortages',
      question: "What causes shortages in Amazon's system?",
      answer:
        "Shortages can result from receiving errors, damaged goods, theft, system glitches, or misplacement within Amazon's fulfillment centers. Sometimes items are marked as short when they're actually in a different location."
    },

    // Missing Invoices
    {
      id: 'mi1',
      category: 'invoices',
      question: "Why would an invoice go missing in Amazon's system?",
      answer:
        'Invoices can go missing due to system uploads failing, incorrect formatting, timing issues with EDI transmissions, or getting flagged by Amazon’s automated systems for review.'
    },
    {
      id: 'mi2',
      category: 'invoices',
      question: 'How can I track if my invoices were received by Amazon?',
      answer:
        'Use Vendor Central’s Invoice Upload page to check the status of your submissions. You can also set up automated confirmations for EDI transmissions if you use that method.'
    },
    {
      id: 'mi3',
      category: 'invoices',
      question: 'What should I do if Amazon claims they never received my invoice?',
      answer:
        'Re-submit the invoice through Vendor Central and keep records of the submission. If using EDI, check your transmission logs. Consider following up with your Amazon vendor manager if the issue persists.'
    },

    // Audits
    {
      id: 'au1',
      category: 'audits',
      question: 'What triggers an Amazon vendor audit?',
      answer:
        'Audits can be triggered by unusual patterns in returns, shortages, pricing discrepancies, compliance issues, or routine random selection.'
    },
    {
      id: 'au2',
      category: 'audits',
      question: 'How should I prepare for an Amazon audit?',
      answer:
        'Organize all relevant documentation including purchase orders, invoices, shipping records, and correspondence. Ensure your inventory tracking systems are accurate and be prepared to explain your processes clearly.'
    },
    {
      id: 'au3',
      category: 'audits',
      question: 'What happens if discrepancies are found during an audit?',
      answer:
        'Amazon may request corrective actions, implement chargebacks, or require process changes. In some cases, you may need to provide additional documentation or agree to enhanced monitoring procedures.'
    }
  ];

  // --- Filtered FAQs ---
  filteredFAQs = computed(() => {
    const search = this.searchTerm().toLowerCase();
    return this.faqData.filter(
      faq =>
        faq.category === this.activeCategory() &&
        (faq.question.toLowerCase().includes(search) ||
          faq.answer.toLowerCase().includes(search))
    );
  });

  setCategory(category: 'overbilling' | 'shortages' | 'invoices' | 'audits') {
    this.activeCategory.set(category);
  }
}
