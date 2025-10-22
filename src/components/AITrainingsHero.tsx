import { Link } from "react-router-dom";

const Card = (
  {
    to,
    title,
    description,
    tone = "neutral",
    footer,
    className = "",
    titleLevel = "h3",
    showArrow = true,
    alignBottom = false,
  }: {
    to?: string;
    title: string;
    description?: string;
    tone?: "neutral" | "pink";
    footer?: string;
    className?: string;
    titleLevel?: "h2" | "h3";
    showArrow?: boolean;
    alignBottom?: boolean;
  }
) => {
  const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) =>
    to ? (
      <Link to={to!} className="block h-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-design-pink rounded-2xl">
        {children}
      </Link>
    ) : (
      <div className="h-full">{children}</div>
    );

  return (
    <Wrapper>
      <div
        className={`rounded-2xl p-6 h-full flex flex-col ${
          tone === "pink" ? "bg-design-bg-pink" : "bg-design-bg"
        } ${className}`}
      >
        {alignBottom ? (
          <>
            <div className="flex-1"></div>
            {titleLevel === "h2" ? (
              <h2 className="font-playfair font-black text-4xl text-black dark:text-white mb-3">
                {title}
              </h2>
            ) : (
              <h3 className="font-playfair font-black text-2xl text-black dark:text-white mb-3">
                {title}
              </h3>
            )}
            {footer && (
              <div className="font-raleway text-lg text-black dark:text-white">
                {footer}
              </div>
            )}
            {showArrow && (
              <div className="font-playfair text-2xl">→</div>
            )}
          </>
        ) : (
          <>
            {titleLevel === "h2" ? (
              <h2 className="font-playfair font-black text-4xl text-black dark:text-white my-5">
                {title}
              </h2>
            ) : (
              <h3 className="font-playfair font-black text-2xl text-black dark:text-white mb-3">
                {title}
              </h3>
            )}
            {description && (
              <p className="font-raleway text-gray-800 dark:text-gray-200 mb-8 flex-1 text-lg">
                {description}
              </p>
            )}
            {footer && (
              <div className="font-raleway text-lg text-black dark:text-white mt-auto">
                {footer}
              </div>
            )}
            {showArrow && (
              <div className="mt-auto font-playfair text-2xl">→</div>
            )}
          </>
        )}
      </div>
    </Wrapper>
  );
};

const SmallCard = (
  {
    to,
    title,
    footer,
    tone = "neutral",
    className = "",
    titleLevel = "h3",
    showArrow = false,
    alignBottom = true,
  }: {
    to?: string;
    title: string;
    footer?: string;
    tone?: "neutral" | "pink";
    className?: string;
    titleLevel?: "h2" | "h3";
    showArrow?: boolean;
    alignBottom?: boolean;
  }
) => (
  <Card to={to} title={title} footer={footer} tone={tone} className={className} titleLevel={titleLevel} showArrow={showArrow} alignBottom={alignBottom} />
);

const AITrainingsHero = () => {
  return (
    <section className="mb-16">
      <div className="mx-auto">
        <h1 className="text-center font-playfair font-black text-4xl md:text-6xl text-black dark:text-white mb-10">
          AI training
        </h1>

        {/* Grid layout */}
        <div 
          className="grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gridTemplateRows: 'repeat(3, 1fr)',
            gridColumnGap: '1rem',
            gridRowGap: '1rem',
            minHeight: '800px'
          }}
        >
          {/* div1: Right column spanning 3 rows */}
          <div style={{ gridArea: '1 / 3 / 4 / 4', height: '100%' }} className="h-full">
            <Card
              className="h-full"
              tone="pink"
              title="In-house trainings"
              titleLevel="h2"
              description="In-house trainings tailored to your team's needs. Can be online or offline basis, duration depends on the format or context, starting with a few hours to a few days."
            />
          </div>

          {/* div2: Large left card spanning 2 columns, 2 rows */}
          <div style={{ gridArea: '1 / 1 / 3 / 3', height: '100%' }} className="h-full">
            <Card
              className="h-full"
              title="Cohort-based"
              titleLevel="h2"
              description="Intensive online cohorts with in-depth content and practical exercises. Content is updated with every time to cover laters realise as tools advance fast."
            />
          </div>

          {/* div3: Top right small card */}
          <div style={{ gridArea: '1 / 4 / 2 / 5' }} className="h-full">
            <SmallCard tone="pink" title="AI models" />
          </div>

          {/* div4: Middle right small card */}
          <div style={{ gridArea: '2 / 4 / 3 / 5' }} className="h-full">
            <SmallCard tone="pink" title="UX for AI" />
          </div>

          {/* div5: Bottom right small card */}
          <div style={{ gridArea: '3 / 4 / 4 / 5' }} className="h-full">
            <SmallCard tone="pink" title="AI prototyping" />
          </div>

          {/* div6: Bottom left course card */}
          <div style={{ gridArea: '3 / 1 / 4 / 2' }} className="h-full">
            <SmallCard
              to="/ai-training"
              title="AI prototyping mastery"
              footer="4 sessions"
              showArrow={false}
            />
          </div>

          {/* div7: Bottom middle course card */}
          <div style={{ gridArea: '3 / 2 / 4 / 3' }} className="h-full">
            <SmallCard
              to="/ai-products-course"
              title="Prototyping AI Products"
              footer="2 sessions"
              showArrow={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AITrainingsHero;


