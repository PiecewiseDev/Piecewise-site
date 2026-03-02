import React from 'react';

export { metadata, viewport } from './metadata';

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 pt-28 sm:pt-32 md:pt-36 lg:pt-40 pb-16 sm:pb-20 md:pb-24 lg:pb-28">
        {/* Page header — outside prose to avoid style conflicts */}
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-2">
            Privacy Policy
          </h1>
          <p className="text-base text-gray-500 mb-1">Piecewise LLC</p>
          <p className="text-sm text-gray-400">Effective Date: March 2, 2026</p>
        </div>

        <article className="legal-content prose prose-slate max-w-none">
          <p>
            This Privacy Policy describes how Piecewise LLC (&ldquo;Piecewise,&rdquo;
            &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) collects, uses, and shares
            personal information when you visit our website at piecewiseai.com (the
            &ldquo;Site&rdquo;), submit inquiries, or engage us for services. It also describes your
            choices regarding your personal information.
          </p>
          <p>
            Piecewise is a North Carolina limited liability company that builds custom AI assistants
            for business owners. This policy applies to all personal information we collect through
            our Site, during our client engagements, and through related communications.
          </p>
          <p>
            If you have questions about this policy, you can reach us at{' '}
            <a href="mailto:kyle@piecewiseai.com">kyle@piecewiseai.com</a>.
          </p>

          {/* Section 1 */}
          <h2>1. Information We Collect</h2>

          <h3>Information You Provide Directly</h3>
          <p>We collect personal information that you voluntarily give us, including:</p>
          <ul>
            <li>
              <strong>Website contact form.</strong> When you submit an inquiry through our Site, we
              collect your name, email address, company or business name, website URL, and the
              content of your message.
            </li>
            <li>
              <strong>Free trial sign-up.</strong> When you submit your email address through our
              homepage trial form, we collect your email address to follow up with you about our
              services.
            </li>
            <li>
              <strong>Scheduling.</strong> When you book a call through our Calendly integration, we
              collect your name and email address. Calendly may collect additional technical
              information in accordance with its own privacy policy.
            </li>
            <li>
              <strong>Client engagements.</strong> If you become a client, we collect additional
              information in the course of our working relationship, including business documents,
              policies, workflows, operational materials, and other content you provide to support
              development of your custom GPT (referred to in our agreements as &ldquo;Client
              Materials&rdquo;). We also collect your billing information indirectly through Stripe
              (see &ldquo;Payment Information&rdquo; below).
            </li>
            <li>
              <strong>Session recordings.</strong> With your consent, we record and transcribe
              client sessions conducted via video conferencing platforms such as Zoom or Google
              Meet. These recordings and transcripts are used for development, quality assurance,
              and internal recordkeeping.
            </li>
            <li>
              <strong>Contracts and signatures.</strong> When you execute agreements with us through
              DocuSign, we collect your name, title, email address, and electronic signature.
            </li>
          </ul>

          <h3>Information Collected Automatically</h3>
          <p>
            When you visit our Site, certain technical information may be collected automatically:
          </p>
          <ul>
            <li>
              <strong>Server and hosting data.</strong> Our Site is hosted on Vercel, which may
              automatically collect standard server log information such as your IP address, browser
              type, referring URL, pages visited, and timestamps. This data is collected for
              security, performance, and operational purposes.
            </li>
            <li>
              <strong>Privacy-friendly analytics.</strong> We use Vercel Analytics and Vercel Speed
              Insights to collect anonymized, cookie-free usage and performance data, including page
              views, referrer information, device type, and web performance metrics. These tools do
              not use cookies, do not track you across other websites, and do not collect personally
              identifiable information.
            </li>
            <li>
              <strong>Essential cookies.</strong> Our Site may use cookies or similar technologies
              that are strictly necessary for the Site to function, such as session management. We
              do not use advertising cookies, remarketing tags, or cross-site tracking technologies.
            </li>
          </ul>

          <h3>Payment Information</h3>
          <p>
            We use Stripe to process payments. When you submit a payment, your payment card details
            are collected and processed directly by Stripe. We do not collect, access, or store your
            full credit card number or payment credentials. Stripe&apos;s handling of your payment
            information is governed by Stripe&apos;s privacy policy, available at{' '}
            <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer">
              stripe.com/privacy
            </a>
            .
          </p>

          <h3>Information From Third Parties</h3>
          <p>
            We do not purchase personal information from data brokers or receive personal
            information about you from third parties, except as naturally occurs through the
            platforms described above (Calendly, Stripe, DocuSign) when you interact with those
            services in connection with our engagement.
          </p>

          {/* Section 2 */}
          <h2>2. How We Use Your Information</h2>
          <p>We use the personal information we collect for the following specific purposes:</p>
          <ul>
            <li>
              <strong>To respond to your inquiries.</strong> When you submit a contact form or book
              a call, we use your name and email to follow up with you.
            </li>
            <li>
              <strong>To deliver our services.</strong> We use Client Materials, session recordings,
              transcripts, and related information to develop, configure, test, and maintain your
              custom GPT assistant.
            </li>
            <li>
              <strong>To process payments.</strong> We use Stripe to bill for our services,
              including the onboarding fee, monthly support fees, and any other amounts due under
              our agreements.
            </li>
            <li>
              <strong>To manage our client relationships.</strong> We use cloud-based project
              management and file storage tools to track project status, manage engagement
              workflows, and store client files, transcripts, and internal documentation related to
              your build.
            </li>
            <li>
              <strong>To execute contracts.</strong> We use DocuSign to deliver, execute, and store
              our agreements.
            </li>
            <li>
              <strong>To maintain and improve our services.</strong> We may use aggregated,
              anonymized data derived from client engagements for internal research, benchmarking,
              and service improvement, as described in our client agreements. This data cannot
              reasonably identify you or reveal your confidential information.
            </li>
            <li>
              <strong>To comply with legal obligations.</strong> We may use or retain personal
              information as needed to comply with applicable laws, respond to legal process, or
              protect our rights.
            </li>
          </ul>

          {/* Section 3 */}
          <h2>3. How We Share Your Information</h2>
          <p>
            We do not sell your personal information. We have not sold personal information in the
            preceding twelve months, and we have no plans to do so.
          </p>
          <p>We share personal information only in the following limited circumstances:</p>
          <ul>
            <li>
              <strong>Service providers.</strong> We use third-party platforms to operate our
              business. These providers process personal information on our behalf and include, but
              are not limited to:
              <ul>
                <li>Stripe — payment processing</li>
                <li>DocuSign — contract execution</li>
                <li>Calendly — appointment scheduling</li>
                <li>Zoom and Google Meet — video conferencing</li>
                <li>Vercel — website hosting and privacy-friendly analytics</li>
              </ul>
              <p>
                We also use additional cloud-based tools for project management, file storage, and
                session recording. Each of our service providers has its own privacy policy
                governing how it handles your information.
              </p>
            </li>
            <li>
              <strong>Legal requirements.</strong> We may disclose personal information if required
              by law, subpoena, court order, or governmental request, or if we believe disclosure is
              necessary to protect our rights, your safety, or the safety of others.
            </li>
            <li>
              <strong>Business transfers.</strong> In the event of a merger, acquisition, or sale of
              all or a portion of our assets, your personal information may be transferred as part
              of that transaction. We will notify you of any such change.
            </li>
            <li>
              <strong>With your consent.</strong> We may share information in other circumstances if
              you have given us explicit consent.
            </li>
          </ul>

          {/* Section 4 */}
          <h2>4. Cookies and Tracking Technologies</h2>
          <p>
            Our Site is intentionally lightweight. We do not use advertising pixels, remarketing
            tags, or social media tracking widgets. We do not use platforms such as Google Analytics
            or any tool that tracks you across other websites.
          </p>
          <p>
            We use Vercel Analytics and Vercel Speed Insights, which are privacy-focused,
            cookie-free tools that collect anonymized page-view and performance data. These tools do
            not use cookies, do not collect personally identifiable information, and do not enable
            cross-site tracking or advertising.
          </p>
          <p>
            The Site may use essential cookies required for basic functionality, such as managing
            your browsing session. These cookies do not track you across other websites and are not
            used for advertising or profiling.
          </p>
          <p>
            Because we do not use non-essential cookies or cross-site tracking technologies, there
            is no cookie consent banner or preference center on our Site at this time. If we add
            marketing or advertising tools in the future, we will update this policy and implement
            appropriate notice and consent mechanisms.
          </p>

          {/* Section 5 */}
          <h2>5. Data Retention</h2>
          <p>
            We retain personal information for as long as necessary to fulfill the purposes
            described in this policy, unless a longer retention period is required by law.
          </p>
          <ul>
            <li>
              <strong>Website inquiries and scheduling data.</strong> Contact form submissions are
              retained for as long as needed to respond to your inquiry and maintain our records.
              Calendly retains scheduling data in accordance with its own policies.
            </li>
            <li>
              <strong>Client Materials and engagement records.</strong> As described in our client
              agreements, we retain Client Materials for the duration of our agreement plus three
              (3) years, or longer if required by law. After the retention period expires, we
              destroy such materials in accordance with our standard practices.
            </li>
            <li>
              <strong>Session recordings and transcripts.</strong> Retained for the same duration as
              Client Materials, unless you request earlier deletion.
            </li>
            <li>
              <strong>Payment records.</strong> Stripe retains transaction records in accordance
              with its own policies and applicable financial regulations. We retain billing records
              as needed for accounting and tax purposes.
            </li>
            <li>
              <strong>Contract records.</strong> DocuSign retains executed agreements in accordance
              with its policies. We retain copies for our records and legal compliance.
            </li>
          </ul>

          {/* Section 6 */}
          <h2>6. Data Security</h2>
          <p>
            We maintain commercially reasonable administrative, technical, and physical safeguards
            designed to protect personal information from unauthorized access, disclosure,
            alteration, or destruction. These measures include secure cloud storage, access controls
            limited to authorized personnel, and the use of encrypted platforms for payments and
            contract execution.
          </p>
          <p>
            No method of transmission over the internet or electronic storage is completely secure,
            and we cannot guarantee absolute security. If we become aware of a security incident
            involving your personal information, we will notify you promptly as required by
            applicable law.
          </p>

          {/* Section 7 */}
          <h2>7. Your Rights and Choices</h2>
          <p>
            Depending on where you reside, you may have certain rights regarding your personal
            information.
          </p>

          <h3>All Users</h3>
          <ul>
            <li>
              <strong>Contact form and communications.</strong> You may request that we delete any
              personal information you have submitted through our contact form by emailing us at{' '}
              <a href="mailto:kyle@piecewiseai.com">kyle@piecewiseai.com</a>.
            </li>
            <li>
              <strong>Client Materials.</strong> If you are a current or former client, you may
              request the return or destruction of your Client Materials in accordance with the
              terms of your agreement with us.
            </li>
            <li>
              <strong>Unsubscribe.</strong> Because we do not operate an email marketing program,
              there is no mailing list to unsubscribe from. If you no longer wish to receive
              communications from us, simply let us know at{' '}
              <a href="mailto:kyle@piecewiseai.com">kyle@piecewiseai.com</a>.
            </li>
          </ul>

          <h3>California Residents (CCPA/CPRA)</h3>
          <p>
            If you are a California resident, you have the following rights under the California
            Consumer Privacy Act and the California Privacy Rights Act:
          </p>
          <ul>
            <li>
              <strong>Right to know.</strong> You may request that we disclose the categories and
              specific pieces of personal information we have collected about you, the purposes for
              collection, and the categories of third parties with whom we have shared it.
            </li>
            <li>
              <strong>Right to delete.</strong> You may request that we delete personal information
              we have collected from you, subject to certain exceptions permitted by law.
            </li>
            <li>
              <strong>Right to correct.</strong> You may request that we correct inaccurate personal
              information we maintain about you.
            </li>
            <li>
              <strong>Right to opt out of sale or sharing.</strong> We do not sell your personal
              information and do not share it for cross-context behavioral advertising. There is no
              need to opt out because these activities do not occur.
            </li>
            <li>
              <strong>Right to non-discrimination.</strong> We will not discriminate against you for
              exercising any of your privacy rights.
            </li>
          </ul>
          <p>
            <strong>How to submit a request.</strong> To exercise any of these rights, email us at{' '}
            <a href="mailto:kyle@piecewiseai.com">kyle@piecewiseai.com</a>. We will verify your
            identity before processing your request and respond within forty-five (45) days, as
            required by law. If we need additional time, we will notify you.
          </p>

          {/* Section 8 */}
          <h2>8. International Data Transfers</h2>
          <p>
            Piecewise is based in the United States, and all personal information we collect is
            processed and stored within the United States. We do not actively market to or solicit
            individuals outside the United States. If you access our Site from outside the U.S.,
            please be aware that your information will be transferred to and processed in the United
            States, which may have different data protection laws than your jurisdiction.
          </p>

          {/* Section 9 */}
          <h2>9. Children&apos;s Privacy</h2>
          <p>
            Our services are designed for business owners and professionals. We do not knowingly
            collect personal information from anyone under the age of sixteen (16). If we learn that
            we have collected personal information from a child under 16, we will take steps to
            delete that information promptly. If you believe a child has provided us with personal
            information, please contact us at{' '}
            <a href="mailto:kyle@piecewiseai.com">kyle@piecewiseai.com</a>.
          </p>

          {/* Section 10 */}
          <h2>10. Third-Party Links</h2>
          <p>
            Our Site or communications may contain links to third-party websites or services, such
            as Calendly, Stripe, or OpenAI. We are not responsible for the privacy practices,
            content, or security of any third-party site. We encourage you to review the privacy
            policies of any third-party services you interact with.
          </p>

          {/* Section 11 */}
          <h2>11. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices,
            tools, or legal requirements. When we make material changes, we will update the
            &ldquo;Effective Date&rdquo; at the top of this policy and post the revised version on
            our Site. We encourage you to review this policy periodically.
          </p>
          <p>
            For material changes that significantly affect how we handle your personal information,
            we will make reasonable efforts to notify you by email or through a prominent notice on
            our Site before the changes take effect.
          </p>

          {/* Section 12 */}
          <h2>12. Contact Us</h2>
          <p>
            If you have questions, concerns, or requests related to this Privacy Policy or our data
            practices, please contact us:
          </p>
          <address className="not-italic">
            <p>
              <strong>Piecewise LLC</strong>
              <br />
              Attn: Privacy Inquiries
              <br />
              436 East 36th Street
              <br />
              Charlotte, NC 28205
              <br />
              Email: <a href="mailto:kyle@piecewiseai.com">kyle@piecewiseai.com</a>
            </p>
          </address>
        </article>
      </div>
    </div>
  );
}
