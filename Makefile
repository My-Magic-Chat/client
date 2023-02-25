RUN:=yarn

# LIBS #
UI:=ui
SETUP:=setup
DESIGN:=design
SERVICE:=service

# WEB #
AUTH:=auth

# ------------------------------------------------------------------------------------ #

define run_in_workspace
	@echo --------------------------
	@echo $(1) - $(2)
	@echo --------------------------
	$(RUN) workspace @client/$(1) $(2)
endef

setup:
	make clean-all
	make install
	make build-all

install:
	yarn

install-immutable:
	yarn install --immutable

# ------------------- DEV ------------------- #

dev-ui:
	$(call run_in_workspace,$(UI),storybook)

dev-auth:
	$(call run_in_workspace,$(AUTH),start)

# ------------------ BUILD ------------------ #

build-ui:
	$(call run_in_workspace,$(UI),build)

build-setup:
	$(call run_in_workspace,$(SETUP),build:prod)

build-service:
	$(call run_in_workspace,$(SERVICE),build:prod)

build-design:
	$(call run_in_workspace,$(DESIGN),build:default)

build-dependencies: build-design build-ui

build-auth:
	$(call run_in_workspace,$(AUTH),build)

build-all-auth: build-dependencies build-auth

build-all: build-dependencies build-auth

# ------------------ WATCH ------------------ #

watch-design:
	$(call run_in_workspace,$(DESIGN),watch)

# ------------------ CLEAR ------------------ #

define delete_build
	@echo delete_build $(1)
	rm -Rf ./packages/$(1)/dist
endef

clean-builds:
	$(call delete_build,shared/$(UI))
	$(call delete_build,shared/$(DESIGN))

define delete_dependencies
	@echo delete_dependencies $(1)
	rm -Rf ./packages/$(1)/node_modules
endef

clean-dependencies:
	rm -Rf ./node_modules
	$(call delete_dependencies,shared/$(UI))
	$(call delete_dependencies,shared/$(DESIGN))

clean-all: clean-dependencies clean-builds

# ------------------ TEST ------------------ #

test-ui:
	$(call run_in_workspace,$(UI),test)

test-setup:
	$(call run_in_workspace,$(SETUP),test)

test-service:
	$(call run_in_workspace,$(SERVICE),test)

# ------------------ LINT ------------------ #

lint:
	$(call run_in_workspace,$(UI),lint)
	$(call run_in_workspace,$(AUTH),lint)

# ------------------ Lighthouse CI ------------------ #