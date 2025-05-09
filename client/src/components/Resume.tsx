import React from 'react';
import { 
  Document, 
  Page, 
  Text, 
  View, 
  StyleSheet, 
  PDFDownloadLink,
  Font,
  Link
} from '@react-pdf/renderer';

// Register fonts
Font.register({
  family: 'Roboto',
  fonts: [
    { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-regular-webfont.ttf', fontWeight: 'normal' },
    { src: 'https://cdnjs.cloudflare.com/ajax/libs/ink/3.1.10/fonts/Roboto/roboto-bold-webfont.ttf', fontWeight: 'bold' },
  ],
});

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: 'white',
    padding: 30,
    fontFamily: 'Roboto'
  },
  header: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 20,
    fontWeight: 'bold',
    color: '#1E88E5',
  },
  subheader: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 15,
    color: '#333',
  },
  contactInfo: {
    fontSize: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
    gap: 10,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    color: '#555',
  },
  section: {
    marginBottom: 15,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#1E88E5',
    borderBottom: '1 solid #eee',
    paddingBottom: 5,
  },
  subsection: {
    marginBottom: 10,
  },
  subsectionTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subsectionDetails: {
    fontSize: 10,
    marginBottom: 2,
    color: '#555',
  },
  paragraph: {
    fontSize: 10,
    marginBottom: 5,
    textAlign: 'justify',
    lineHeight: 1.5,
  },
  skill: {
    fontSize: 10,
    marginBottom: 5,
  },
  skillCategory: {
    fontWeight: 'bold',
    marginBottom: 3,
  },
  skillList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
  },
  skillItem: {
    padding: '3 6',
    backgroundColor: '#f0f4f8',
    borderRadius: 3,
  },
  link: {
    color: '#1E88E5',
    textDecoration: 'none',
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    fontSize: 9,
    color: '#999',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  col: {
    flex: 1,
  },
  strong: {
    fontWeight: 'bold',
  },
});

// Define the Resume Document
const ResumeDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* Header */}
      <Text style={styles.header}>Muhammad Meluk</Text>
      <Text style={styles.subheader}>Web Developer & Technical Support Specialist</Text>
      
      {/* Contact Information */}
      <View style={styles.contactInfo}>
        <Text style={styles.contactItem}>Alexandria, Egypt</Text>
        <Text style={styles.contactItem}>+20 102-272-3804</Text>
        <Text style={styles.contactItem}>MuhammadMeluk@gmail.com</Text>
      </View>
      
      {/* Profile Summary */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>PROFESSIONAL SUMMARY</Text>
        <Text style={styles.paragraph}>
          Web Developer specializing in HTML, CSS, and Vanilla JavaScript with experience in customer service and technical support. 
          I create user-friendly, responsive websites that blend functionality with great design, always keeping the end-user experience in mind.
        </Text>
      </View>
      
      {/* Skills */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>SKILLS</Text>
        <View style={styles.row}>
          <View style={styles.col}>
            <View style={styles.subsection}>
              <Text style={styles.skillCategory}>Development</Text>
              <View style={styles.skillList}>
                <Text style={styles.skillItem}>HTML5</Text>
                <Text style={styles.skillItem}>CSS3</Text>
                <Text style={styles.skillItem}>JavaScript</Text>
                <Text style={styles.skillItem}>Responsive Design</Text>
              </View>
            </View>
          </View>
          <View style={styles.col}>
            <View style={styles.subsection}>
              <Text style={styles.skillCategory}>Support & Service</Text>
              <View style={styles.skillList}>
                <Text style={styles.skillItem}>Technical Support</Text>
                <Text style={styles.skillItem}>Customer Service</Text>
                <Text style={styles.skillItem}>Problem Solving</Text>
                <Text style={styles.skillItem}>Communication</Text>
              </View>
            </View>
          </View>
        </View>
      </View>
      
      {/* Education & Certifications */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>EDUCATION & CERTIFICATIONS</Text>
        
        <View style={styles.subsection}>
          <Text style={styles.subsectionTitle}>Commerce Diploma</Text>
          <Text style={styles.subsectionDetails}>Local Institution • 2022</Text>
        </View>
        
        <View style={styles.subsection}>
          <Text style={styles.subsectionTitle}>English Test (C1 Advanced)</Text>
          <Text style={styles.subsectionDetails}>EF SET • August 2024 • Score: C1</Text>
          <Link src="https://cert.efset.org/k1q97e" style={styles.link}>https://cert.efset.org/k1q97e</Link>
        </View>
        
        <View style={styles.subsection}>
          <Text style={styles.subsectionTitle}>Foundations of Cybersecurity</Text>
          <Text style={styles.subsectionDetails}>Google • February 2024 • Score: 98.75%</Text>
        </View>
        
        <View style={styles.subsection}>
          <Text style={styles.subsectionTitle}>Microsoft Excel</Text>
          <Text style={styles.subsectionDetails}>Coursera • July 2023 • Score: 100%</Text>
        </View>
        
        <View style={styles.subsection}>
          <Text style={styles.subsectionTitle}>Computer Networking</Text>
          <Text style={styles.subsectionDetails}>Google • November 2022 • Score: 94.50%</Text>
        </View>
        
        <View style={styles.subsection}>
          <Text style={styles.subsectionTitle}>Getting Started with Python</Text>
          <Text style={styles.subsectionDetails}>University of Michigan • November 2022 • Score: 98.34%</Text>
        </View>
        
        <View style={styles.subsection}>
          <Text style={styles.subsectionTitle}>Technical Support Fundamentals</Text>
          <Text style={styles.subsectionDetails}>Google • September 2022 • Score: 98.75%</Text>
        </View>
      </View>
      
      {/* Projects */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>SELECTED PROJECTS</Text>
        
        <View style={styles.subsection}>
          <Text style={styles.subsectionTitle}>BoxMate – Equipment Selection System</Text>
          <Text style={styles.paragraph}>
            Web application that streamlines the process of choosing the right tools for specific tasks.
            Built with HTML, CSS, and JavaScript.
          </Text>
          <Link src="https://msmelok.github.io/box-mate/" style={styles.link}>https://msmelok.github.io/box-mate/</Link>
        </View>
        
        <View style={styles.subsection}>
          <Text style={styles.subsectionTitle}>ClipMate – Clipboard Manager</Text>
          <Text style={styles.paragraph}>
            Web-based clipboard manager that allows users to store and quickly access multiple copied items.
            Developed with HTML, CSS, and JavaScript.
          </Text>
          <Link src="https://msmelok.github.io/clipmate/index.html" style={styles.link}>https://msmelok.github.io/clipmate/</Link>
        </View>
        
        <View style={styles.subsection}>
          <Text style={styles.subsectionTitle}>Vet Corner Clinic – Clinic Website</Text>
          <Text style={styles.paragraph}>
            Professional website for a veterinary clinic featuring services, staff profiles, and appointment booking.
            Designed and developed with a focus on user experience.
          </Text>
          <Link src="https://msmelok.github.io/vetcorner/" style={styles.link}>https://msmelok.github.io/vetcorner/</Link>
        </View>
      </View>
      
      {/* Services */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>SERVICES</Text>
        <View style={styles.row}>
          <View style={styles.col}>
            <Text style={styles.skill}>• Design From Scratch</Text>
            <Text style={styles.skill}>• Develop Live Projects</Text>
          </View>
          <View style={styles.col}>
            <Text style={styles.skill}>• Solve Technical Problems</Text>
            <Text style={styles.skill}>• Responsive Web Design</Text>
          </View>
        </View>
      </View>
      
      {/* Footer */}
      <Text style={styles.footer}>
        Muhammad Meluk • Web Developer • Updated {new Date().toLocaleDateString()}
      </Text>
    </Page>
  </Document>
);

// Resume Download Component
const Resume = () => (
  <PDFDownloadLink 
    document={<ResumeDocument />} 
    fileName="Muhammad_Meluk_Resume.pdf"
    style={{
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      color: 'inherit'
    }}
  >
    {({ blob, url, loading, error }) =>
      loading ? 'Loading document...' : (
        <>
          <i className="fas fa-download mr-2"></i> Download My Resume
        </>
      )
    }
  </PDFDownloadLink>
);

export default Resume;