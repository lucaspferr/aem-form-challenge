/*
 * ***********************************************************************
 * Form App CONFIDENTIAL
 * ___________________
 *
 * Copyright 2022 Form App.
 * All Rights Reserved.
 *
 * NOTICE:  All information contained herein is, and remains the property
 * of Form App and its suppliers, if any. The intellectual and
 * technical concepts contained herein are proprietary to Form App
 * and its suppliers and are protected by trade secret or copyright law.
 * Dissemination of this information or reproduction of this material
 * is strictly forbidden unless prior written permission is obtained
 * from Form App.
 * ***********************************************************************
 */

package com.formapp.core.models.impl;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.formapp.core.models.FormComponent;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.InjectionStrategy;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(adaptables = {
    SlingHttpServletRequest.class
}, adapters = {
    FormComponent.class,
    ComponentExporter.class
}, resourceType = "formapp/components/form-component")
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class FormComponentImpl
    implements FormComponent
{

    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String mainTitle;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String firstTabName;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String secondTabName;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String thirdTabName;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String nextButtonText;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String finishButtonText;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String returnButtonText;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String fullNameLabel;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String nickNameLabel;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String emailLabel;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String phoneLabel;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String termsLabel;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String birthdayLabel;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String dayLabel;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String monthLabel;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String yearLabel;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String ageLabel;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String linkedinLabel;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String githubLabel;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String certificatesLabel;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String certificatesButtonLabel;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String moreButtonText;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String teamNameLabel;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String institutionLabel;
    @ValueMapValue(injectionStrategy = InjectionStrategy.OPTIONAL)
    private String graduationLabel;
    @SlingObject
    private Resource resource;

    @Override
    @JsonProperty("mainTitle")
    public String getMainTitle() {
        return mainTitle;
    }

    @Override
    @JsonProperty("firstTabName")
    public String getFirstTabName() {
        return firstTabName;
    }

    @Override
    @JsonProperty("secondTabName")
    public String getSecondTabName() {
        return secondTabName;
    }

    @Override
    @JsonProperty("thirdTabName")
    public String getThirdTabName() {
        return thirdTabName;
    }

    @Override
    @JsonProperty("nextButtonText")
    public String getNextButtonText() {
        return nextButtonText;
    }

    @Override
    @JsonProperty("finishButtonText")
    public String getFinishButtonText() {
        return finishButtonText;
    }

    @Override
    @JsonProperty("returnButtonText")
    public String getReturnButtonText() {
        return returnButtonText;
    }

    @Override
    @JsonProperty("fullNameLabel")
    public String getFullNameLabel() {
        return fullNameLabel;
    }

    @Override
    @JsonProperty("nickNameLabel")
    public String getNickNameLabel() {
        return nickNameLabel;
    }

    @Override
    @JsonProperty("emailLabel")
    public String getEmailLabel() {
        return emailLabel;
    }

    @Override
    @JsonProperty("phoneLabel")
    public String getPhoneLabel() {
        return phoneLabel;
    }

    @Override
    @JsonProperty("termsLabel")
    public String getTermsLabel() {
        return termsLabel;
    }

    @Override
    @JsonProperty("birthdayLabel")
    public String getBirthdayLabel() {
        return birthdayLabel;
    }

    @Override
    @JsonProperty("dayLabel")
    public String getDayLabel() {
        return dayLabel;
    }

    @Override
    @JsonProperty("monthLabel")
    public String getMonthLabel() {
        return monthLabel;
    }

    @Override
    @JsonProperty("yearLabel")
    public String getYearLabel() {
        return yearLabel;
    }

    @Override
    @JsonProperty("ageLabel")
    public String getAgeLabel() {
        return ageLabel;
    }

    @Override
    @JsonProperty("linkedinLabel")
    public String getLinkedinLabel() {
        return linkedinLabel;
    }

    @Override
    @JsonProperty("githubLabel")
    public String getGithubLabel() {
        return githubLabel;
    }

    @Override
    @JsonProperty("certificatesLabel")
    public String getCertificatesLabel() {
        return certificatesLabel;
    }

    @Override
    @JsonProperty("certificatesButtonLabel")
    public String getCertificatesButtonLabel() {
        return certificatesButtonLabel;
    }

    @Override
    @JsonProperty("moreButtonText")
    public String getMoreButtonText() {
        return moreButtonText;
    }

    @Override
    @JsonProperty("teamNameLabel")
    public String getTeamNameLabel() {
        return teamNameLabel;
    }

    @Override
    @JsonProperty("institutionLabel")
    public String getInstitutionLabel() {
        return institutionLabel;
    }

    @Override
    @JsonProperty("graduationLabel")
    public String getGraduationLabel() {
        return graduationLabel;
    }

    @Override
    public String getExportedType() {
        return resource.getResourceType();
    }

}
