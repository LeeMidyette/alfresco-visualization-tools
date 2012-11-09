package org.alfresco.repo.visualization;

import static org.junit.Assert.assertEquals;

import static org.junit.Assert.assertNotNull;

import org.alfresco.repo.security.authentication.AuthenticationUtil;
import org.alfresco.service.cmr.repository.NodeService;
import org.alfresco.util.ApplicationContextHelper;
import org.apache.log4j.Logger;
import org.junit.BeforeClass;
import org.junit.Test;
import org.springframework.context.ApplicationContext;

/**
 * A simple class demonstrating how to run out-of-container tests 
 * loading Alfresco application context. 
 *
 */
public class DemoComponentTest {
    
    private static final String ADMIN_USER_NAME = "admin";

    static Logger log = Logger.getLogger(DemoComponentTest.class);

    protected static ApplicationContext applicationContext;
    
    protected static NodeService nodeService;
    
    @BeforeClass
    public static void initAppContext()
    {
        // TODO: Make testing properly working without need for helpers
        // TODO: Provide this in an SDK base class
        ApplicationContextHelper.setUseLazyLoading(false);
        ApplicationContextHelper.setNoAutoStart(true);
        applicationContext = ApplicationContextHelper.getApplicationContext(new String[] { "classpath:alfresco/application-context.xml" });
        nodeService = (NodeService) applicationContext.getBean("NodeService");
        AuthenticationUtil.setFullyAuthenticatedUser(ADMIN_USER_NAME);
        log.debug("Sample test logging: If you see this message, means your unit test logging is properly configured. Change it in test-log4j.properties");
        log.debug("Sample test logging: Application Context properly loaded");
    }

    @Test
    public void testWiring() {
        assertNotNull(applicationContext);
    }
}
