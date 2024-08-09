import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import HorizontalRuleOutlinedIcon from '@mui/icons-material/HorizontalRuleOutlined';
import { Container, Grid } from '@mui/material';
import { useState } from 'react';

const AccordionItem = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="accordion-item">
      <div
        className="accordion-title transition-all ease-in"
        onClick={toggleAccordion}>
        <h3 className="text-white">{title}</h3>
        <span>
          {isOpen ? (
            <HorizontalRuleOutlinedIcon sx={{ color: '#fff' }} />
          ) : (
            <AddOutlinedIcon sx={{ color: '#fff' }} />
          )}
        </span>
      </div>
      {isOpen && (
        <div className="accordion-content transition-all duration-300 ease-in-out">
          <p className="text-gray-400">{content}</p>
        </div>
      )}
    </div>
  );
};

const FrequentlyAskedQuestion = () => {
  const data = [
    {
      title: 'How do you work?',
      content: 'This is the content for accordion item 1.',
    },
    {
      title: 'Can you work on very large projects?',
      content: 'This is the content for accordion item 2.',
    },
    {
      title: 'Do you work on the content?',
      content: 'This is the content for accordion item 3.',
    },
    {
      title: 'Who will I be dealing with?',
      content: 'This is the content for accordion item 3.',
    },
  ];
  const data1 = [
    {
      title: 'What kind of clients do you work with?',
      content: 'This is the content for accordion item 1.',
    },
    {
      title: 'How long does a project last?',
      content: 'This is the content for accordion item 2.',
    },
    {
      title: 'Can you deliver a presentation in 24/48 hours?',
      content: 'This is the content for accordion item 3.',
    },
    {
      title: 'Do you work on other presentation softwares?',
      content: 'This is the content for accordion item 3.',
    },
  ];

  return (
    <div>
      <div className="mb-5 text-center">
        <div className="mb-5 text-center text-3xl font-bold text-white sm:text-3xl md:text-4xl lg:text-5xl">
          Frequently Asked Question
        </div>
        <div className="text-white">
          The most common questions about how our <br /> business works and
          what can do for you.
        </div>
      </div>
      <div className="my-12">
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <div className="accordion">
                {data.map((item, index) => (
                  <AccordionItem
                    key={index}
                    title={item.title}
                    content={item.content}
                  />
                ))}
              </div>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12}>
              <div className="accordion">
                {data1.map((item, index) => (
                  <AccordionItem
                    key={index}
                    title={item.title}
                    content={item.content}
                  />
                ))}
              </div>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default FrequentlyAskedQuestion;
