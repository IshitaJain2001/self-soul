 import React from 'react'
import Navbar from './Navbar'
 import "./FAQ.css"
 export default function FAQ() {
   return (
     <>
     
 <div className="viewall-nav">
    <Navbar/>
 </div>

  <div class="faq-section">

    <h2 class="faq-heading">FAQs</h2>

    <div class="faq-list">
      <div class="faq-item">
        <p class="question">1. Is this product safe for sensitive skin?</p>
        <p class="answer">Yes, our product is Dermatologist Approved and Hypoallergenic, making it safe and gentle for even the most sensitive skin types.</p>
      </div>

      <div class="faq-item">
        <p class="question">2. Can I use this daily?</p>
        <p class="answer">Absolutely! Our formula is designed for everyday use to keep your skin nourished, soft, and refreshed.</p>
      </div>

      <div class="faq-item">
        <p class="question">3. Will this clog my pores?</p>
        <p class="answer">No, it’s non-comedogenic, meaning it won’t clog your pores and is suitable for all skin types.</p>
      </div>

      <div class="faq-item">
        <p class="question">4. Is this suitable for all skin types?</p>
        <p class="answer">Yes, it’s carefully crafted to be suitable for all skin types, including dry, oily, combination, and sensitive skin.</p>
      </div>

      <div class="faq-item">
        <p class="question">5. Are there any artificial fragrances or harsh chemicals?</p>
        <p class="answer">No, our products are free from harsh chemicals and artificial fragrances, keeping your skin healthy and irritation-free.</p>
      </div>

      <div class="faq-item">
        <p class="question">6. Is this product cruelty-free?</p>
        <p class="answer">Yes, we are proud to be cruelty-free. No animal testing is done at any stage of our production.</p>
      </div>
    </div>
  </div>
    </>

   )
 }
 